import React from "react";
import { useProductListing } from "context";

export function PriceRange() {
  const { productsListingState, setMinPrice } = useProductListing();
  const { minPrice, lowestPrice, highestPrice } = productsListingState;
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
        list="range-list"
        onChange={(event) => setMinPrice(event.target.value)}
      />
      {/* <datalist
        id="range-list"
        style={{ display: "inline-flex", justifyContent: "space-around" }}
      >
        <option
          label="5"
          value={(Math.ceil(highestPrice) + Math.floor(lowestPrice)) / 8}
        >
          {" "}
        </option>
        <option
          label="5"
          value={(Math.ceil(highestPrice) + Math.floor(lowestPrice)) / 4}
        >
          {" "}
        </option>
        <option
          label="5"
          value={(Math.ceil(highestPrice) + Math.floor(lowestPrice)) / 2}
        >
          {" "}
        </option>
        <option
          label="5"
          value={((Math.ceil(highestPrice) + Math.floor(lowestPrice)) * 3) / 4}
        >
          {" "}
        </option>
        <option
          label="5"
          value={((Math.ceil(highestPrice) + Math.floor(lowestPrice)) * 7) / 8}
        >
          {" "}
        </option>
      </datalist> */}
    </div>
  );
}
