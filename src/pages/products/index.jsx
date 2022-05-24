import React from "react";
import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { SortAndFilter } from "../../components/SortAndFilter";
import { useProductListing } from "../../context/product-listing-context";
import { useWindowDimension } from "../../context/window-context";
import { doArraysHaveCommonElement } from "../../utils/doArraysHaveCommonElement";
import { numSort } from "../../utils/numSort";
import { useUser } from "../../context/user-context";
import wishlistIcon from "../../assets/wishlist.png";
import wishlistIconFilled from "../../assets/wishlist-filled.png";
import "./products.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
export const ProductListing = () => {
  const { user } = useUser();

  const { cart: cartState, addToCart } = useCart();
  const {
    wishlist: wishlistState,
    addToWishlist,
    removeFromWishlist,
  } = useWishlist();
  const { items: cart, error: cartError } = cartState;
  const { items: wishlist, error: wishlistError } = wishlistState;

  const { productsListingState } = useProductListing();
  const {
    products,
    productListingError,
    isInStockFilter,
    isFeaturedFilter,
    hasFastDelivery,
    hasRating,
    hasCategories,
    hasSubCategories,
    minPrice,
    sortByPrice,
  } = productsListingState;
  const navigate = useNavigate();
  const isInArray = (array, id) =>
    array.filter((item) => item["_id"] === id).length ? true : false;
  const likeButtonClickHandler = (id, product) => {
    isInArray(wishlist, id)
      ? removeFromWishlist(product)
      : addToWishlist(product);
  };
  const cartClickHandler = (id, product) => {
    isInArray(cart, id) ? navigate("/cart") : addToCart(product);
  };

  const getSortedData = (products) => {
    if (sortByPrice) {
      return sortByPrice === "SORT_PRICE_LOW_TO_HIGH"
        ? numSort("ascending", products, "price")
        : sortByPrice && sortByPrice === "SORT_PRICE_HIGH_TO_LOW"
        ? numSort("descending", products, "price")
        : products;
    } else return products;
  };

  const getFilteredData = (products) => {
    return products
      .filter(({ price }) => Number(price) >= minPrice)
      .filter(({ rating }) => (hasRating ? rating >= hasRating : true))
      .filter(({ inStock }) => (isInStockFilter ? inStock : true))
      .filter(({ featured, inStock }) =>
        isFeaturedFilter ? featured && inStock : true
      )
      .filter(({ fastDelivery, inStock }) =>
        hasFastDelivery ? fastDelivery && inStock : true
      )
      .filter(({ categories }) =>
        hasCategories.length > 0
          ? categories && doArraysHaveCommonElement(categories, hasCategories)
          : true
      )
      .filter(({ subCategories }) =>
        hasSubCategories.length > 0
          ? subCategories &&
            doArraysHaveCommonElement(subCategories, hasSubCategories)
          : true
      );
  };

  const filteredData = getFilteredData(getSortedData(products));

  const [displayFilters, setDisplayFilters] = useState(false);
  const { windowDimension } = useWindowDimension();
  const { windowWidth } = windowDimension;
  const toggleFiltersHandler = () => {
    setDisplayFilters((prev) => !prev);
    if (windowWidth > 1350) setDisplayFilters(false);
  };
  return (
    <>
      <h2 className="heading gutter-y-xl">Our Products</h2>
      {windowWidth < 1350 && (
        <div className="filter-type-toggle">
          <button className="btn bg-secondary" onClick={toggleFiltersHandler}>
            View Filters
          </button>
          {displayFilters && <div className="filter">{<SortAndFilter />}</div>}
        </div>
      )}

      <div className={"product-listing"}>
        {windowWidth > 1350 && (
          <aside className="filter gutter-xy-sm">{<SortAndFilter />}</aside>
        )}

        <section
          className={`products card-shadow  ${
            windowWidth > 960 ? "padding-xy-md" : ""
          }`}
        >
          {filteredData.map((product) => (
            <Card product={product} key={product["_id"]}>
              <button
                className="btn btn-float img-round wishlist-btn"
                title="like"
                onClick={() => likeButtonClickHandler(product["_id"], product)}
              >
                <img
                  src={
                    isInArray(wishlist, product["_id"])
                      ? wishlistIconFilled
                      : wishlistIcon
                  }
                  alt="like"
                  className="img-responsive"
                />
              </button>
              <button
                className={`btn bg-default ${
                  !product.inStock && "disableElement"
                }`}
                title="Purchase Item"
                onClick={() => cartClickHandler(product["_id"], product)}
              >
                {isInArray(cart, product["_id"])
                  ? " Go to Cart"
                  : "Add to Cart"}
              </button>
            </Card>
          ))}
        </section>
      </div>
    </>
  );
};
