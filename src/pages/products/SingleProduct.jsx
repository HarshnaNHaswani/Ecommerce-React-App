import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductListing } from "../../context/product-listing-context";
import { doArraysHaveCommonElement } from "../../utils/doArraysHaveCommonElement";
import { slugify } from "../../utils/slugify";
import { HoverCard } from "../../components/Card/HoverCard";
import { ProductCrashFallback } from "./ProductCrashFallback";
import { isInArray } from "utils/isInArray";
import { useAuth, useCart } from "context";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { productsListingState } = useProductListing();
  const { products: allProducts } = productsListingState;
  const { cart: cartState, addToCart } = useCart();
  const { isLoggedIn } = useAuth();
  const { items: cart, error: cartError } = cartState;
  const [isInCart, setInCart] = useState(false)
  const productArr = allProducts.filter(
    ({ _id: currentId }) => currentId === productId
  );
  const navigate = useNavigate();
  if (productArr.length <= 0) {
    return <ProductCrashFallback />;
  }
  const [product] = productArr;
  const {
    _id,
    title,
    rating,
    reviewers,
    price,
    categories,
    subCategories,
    media,
  } = product;
  const similarItems = allProducts.filter(
    ({ subCategories: currentSub, _id: currentId }) =>
      _id !== currentId && doArraysHaveCommonElement(subCategories, currentSub)
  );

  const cartClickHandler = (id, product) => {
    if(isLoggedIn)
      isInCart
        ? navigate("/cart")
        : addToCart(product)
    else {
      localStorage.setItem("productRedirect", JSON.stringify({type: 'cart', product}));
      navigate("/login", { replace: true, state: { from: location } });
    }
  };

  useEffect(() => {
    const productRedirect =
      JSON.parse(localStorage.getItem("productRedirect")) ?? {};

    if (Object.keys(productRedirect).length > 0) {
      const { type, product } = productRedirect;
      if (type === 'cart') {
        cartClickHandler(product._id, product);
      }
      localStorage.removeItem("productRedirect");
    }
    window.scrollTo(0,0)
  }, []);
  useEffect(() => {
    if (isInArray(cart, _id)) {
      setInCart(true)
    } else if (isInCart) setInCart(false)
  }, [cart])

  return (
    <div className="single-product">
      <div className="grid-container">
        <figure className="grid-child"  title={title}>
          <img src={media} alt={title} className="img-responsive no-expansion size-sm" loading="lazy"/>
          <figcaption className="text text-sm">{title}</figcaption>
        </figure>
        <div className="grid-child">
          <h2>{title}</h2>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <p>Reviewers: {reviewers}</p>
          <div>
            <p>Tags:</p>
            <ul className="list list-inline">
              {categories.map((currentCategory) => (
                <li className="list-item" key={slugify(currentCategory)}>
                  {currentCategory}
                </li>
              ))}
              {subCategories.map((currentCategory) => (
                <li className="list-item" key={slugify(currentCategory)}>
                  {currentCategory}
                </li>
              ))}
            </ul>
          </div>          
          <button
            className={`btn ${
              isInCart ? "bg-accent" : "bg-secondary"
            } ${!product.inStock && "disableElement"}`}
            title="Purchase Item"
            onClick={() => cartClickHandler(product["_id"], product)}
          >
            {isInCart
              ? "Go to Cart"
              : "Add to Cart"}
          </button>
        </div>     
      </div>
      <p>Similar Items:</p>
      <div className="nav nav-scrolling similar-items-nav">
        {similarItems && similarItems.map((item) => (
          <HoverCard item={item} key={item["_id"]} />
        ))}
      </div>
    </div>
  );
};
