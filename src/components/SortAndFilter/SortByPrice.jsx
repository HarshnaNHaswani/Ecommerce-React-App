import React from "react";
import { useProductListing } from "context";

export const SortByPrice = () => {
  const { productsListingState, sortProductsByPrice } = useProductListing();
  const { sortByPrice } = productsListingState;

  const priceSortInputChangeHandler = (event) =>
    sortProductsByPrice(event.target.value);

  return (
    <fieldset className="form-item status-plain-outline">
      <legend>Sort by price</legend>
      <p>
        <input
          type="radio"
          id="low"
          value="SORT_PRICE_LOW_TO_HIGH"
          checked={sortByPrice === "SORT_PRICE_LOW_TO_HIGH"}
          onChange={priceSortInputChangeHandler}
        />
        <label htmlFor="low">low to high</label>
      </p>
      <p>
        <input
          type="radio"
          id="high"
          value="SORT_PRICE_HIGH_TO_LOW"
          checked={sortByPrice === "SORT_PRICE_HIGH_TO_LOW"}
          onChange={priceSortInputChangeHandler}
        />
        <label htmlFor="high">high to low</label>
      </p>
    </fieldset>
  );
};
