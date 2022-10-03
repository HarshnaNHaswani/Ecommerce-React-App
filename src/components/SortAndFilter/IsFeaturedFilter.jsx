import React from "react";
import { useProductListing } from "context";

export const IsFeaturedFilter = () => {
  const { productsListingState:{isFeaturedFilter}, toggleIsFeaturedFilter } = useProductListing();
  return (
    <div className="form-item">
      <p>
        <input
          type="checkbox"
          id="is-featured-filter"
          checked={isFeaturedFilter} // add an onCLick function to select this category and all sub Categories
          onChange={toggleIsFeaturedFilter}
        />
        <label htmlFor={"is-featured-filter"}>Show Featured Only</label>
      </p>
    </div>
  );
};
