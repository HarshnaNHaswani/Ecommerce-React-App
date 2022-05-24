import React from "react";
import { useProductListing } from "../../context/product-listing-context";
import { CategoryFilter } from "./CategoryFilter";
import { HasFastDelivery } from "./hasFastDelivery";
import { InStockFliter } from "./InStockFliter";
import { IsFeaturedFilter } from "./IsFeaturedFilter";
import { PriceRange } from "./PriceRange";
import { Rating } from "./Rating";
import { SortByPrice } from "./SortByPrice";
export const SortAndFilter = () => {
  const { resetSortAndFilters } = useProductListing();

  return (
    <form className="form filter-form padding-xy-md">
      <SortByPrice />
      <PriceRange />
      <CategoryFilter />
      <Rating />
      <InStockFliter />
      <IsFeaturedFilter />
      <HasFastDelivery />
      <button
        type="reset"
        className="btn outline-secondary"
        onClick={() => resetSortAndFilters()}
      >
        Reset All
      </button>
    </form>
  );
};
