import React from "react";
import { useProductListing } from "../../context/product-listing-context";

export const IsFeaturedFilter = () => {
  const { productsListingState, toggleIsFeaturedFilter } = useProductListing();
  const { isFeaturedFilter } = productsListingState;
  return (
    <p>
      <input
        type="checkbox"
        id="is-featured-filter"
        value={isFeaturedFilter}
        checked={isFeaturedFilter} // add an onCLick function to select this category and all sub Categories
        onChange={toggleIsFeaturedFilter}
      />
      <label htmlFor={"is-featured-filter"}>Show Featured Only</label>
    </p>
  );
};