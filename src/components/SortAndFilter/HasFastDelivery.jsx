import React from "react";
import { useProductListing } from "context";

export const HasFastDelivery = () => {
  const { productsListingState:{hasFastDelivery}, toggleHasFastDelivery } = useProductListing();

  return (
    <div className="form-item">
      <p>
        <input
          type="checkbox"
          id="fast-delivery-filter"
          checked={hasFastDelivery}
          onChange={toggleHasFastDelivery}
        />
        <label htmlFor={"fast-delivery-filter"}>Fast Delivery Only</label>
      </p>
    </div>
  );
};
