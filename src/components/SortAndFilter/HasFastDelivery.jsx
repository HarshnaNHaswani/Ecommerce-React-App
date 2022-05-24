import React from "react";
import { useProductListing } from "../../context/product-listing-context";

export const HasFastDelivery = () => {
  const { productsListingState, toggleHasFastDelivery } = useProductListing();
  const { hasFastDelivery } = productsListingState;
  return (
    <p>
      <input
        type="checkbox"
        id="fast-delivery-filter"
        value={hasFastDelivery}
        checked={hasFastDelivery}
        onChange={() => toggleHasFastDelivery()}
      />
      <label htmlFor={"fast-delivery-filter"}>Fast Delivery only</label>
    </p>
  );
};
