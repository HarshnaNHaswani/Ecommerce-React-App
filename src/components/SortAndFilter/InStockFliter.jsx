import React from "react";
import { useProductListing } from "../../context/product-listing-context";

export const InStockFliter = () => {
  const { productsListingState, toggleInStockFilter } = useProductListing();
  const { isInStockFilter } = productsListingState;
  return (
    <div className="form-item">
      <p>
        <input
          type="checkbox"
          id="in-stock-filter"
          value={isInStockFilter}
          checked={isInStockFilter}
          onChange={() => toggleInStockFilter()}
        />
        <label htmlFor={"in-stock-filter"}>Remove Out of Stock</label>
      </p>
    </div>
  );
};
