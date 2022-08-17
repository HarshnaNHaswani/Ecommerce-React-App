import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductListing } from "../../context/product-listing-context";
import { doArraysHaveCommonElement } from "../../utils/doArraysHaveCommonElement";
import { slugify } from "../../utils/slugify";
import { HoverCard } from "../../components/Card/HoverCard";
import { ProductCrashFallback } from "./ProductCrashFallback";

export const SingleProduct = () => {
  const { productId } = useParams();
  const { productsListingState } = useProductListing();
  const { products: allProducts } = productsListingState;
  const productArr = allProducts.filter(
    ({ _id: currentId, title }) => currentId === productId
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
  return (
    <div className="single-product">
      <div className="grid-container">
        <figure className="grid-child"  title={title}>
          <img src={media} alt={title} className="img-responsive no-expansion size-sm"/>
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
