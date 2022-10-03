import React from "react";
import { useProductListing } from "context";

export function PriceRange() {
  const { productsListingState, setMinPrice } = useProductListing();
  const { minPrice, lowestPrice, highestPrice } = productsListingState;
  return (
    <div className="form-item status-plain-outline">
      <label htmlFor="range-price">Price range</label>
      <p>
      <span>{Math.floor(lowestPrice)}</span>
      <input
        type="range"
        min={Math.floor(lowestPrice)}
        max={Math.ceil(highestPrice)}
        value={minPrice}
        className="form-input"
        id="range-price"
        list="tickmarks"
        step={Math.round(0.05 * Math.ceil(highestPrice))}
        onChange={(event) => setMinPrice(event.target.value)}
      />
      <span>{Math.ceil(highestPrice)}</span>
      </p>
      <datalist id="tickmarks">
        <option value="0" label="0%"></option>
        <option value={0.10 * Math.ceil(highestPrice)}></option>
        <option value={0.20 * Math.ceil(highestPrice)}></option>
        <option value={0.30 * Math.ceil(highestPrice)}></option>
        <option value={0.40 * Math.ceil(highestPrice)}></option>
        <option value={0.50 * Math.ceil(highestPrice)} label="50%"></option>
        <option value={0.60 * Math.ceil(highestPrice)}></option>
        <option value={0.70 * Math.ceil(highestPrice)}></option>
        <option value={0.80 * Math.ceil(highestPrice)}></option>
        <option value={0.90 * Math.ceil(highestPrice)}></option>
        <option value={Math.ceil(highestPrice)} label="100%"></option>
      </datalist>
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
