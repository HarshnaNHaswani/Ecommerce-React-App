import React from "react";
import { useProductListing } from "context";

export const HasFastDelivery = () => {
  const { productsListingState, toggleHasFastDelivery } = useProductListing();
  const { hasFastDelivery } = productsListingState;
  return (
    <div className="form-item">
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
    </div>
  );
};
