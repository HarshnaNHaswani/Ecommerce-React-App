import React from "react";
import { useProductListing } from "../../context/product-listing-context";

export function PriceRange() {
  const {
    productsListingState,
    setMinPrice,
  } = useProductListing();
  const {    minPrice,
    lowestPrice,
    highestPrice,} = productsListingState;
  return (
    <div className="form-item status-plain-outline">
      <label htmlFor="range-price">Price range</label>
      <input
        type="range"
        min={Math.floor(lowestPrice)}
        max={Math.ceil(highestPrice)}
        value={minPrice}
        className="form-input"
        id="range-price"
        onChange={(event) => setMinPrice(event.target.value)}
      />
    </div>
  );
}
