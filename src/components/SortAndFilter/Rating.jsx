import React from "react";
import { useProductListing } from "../../context/product-listing-context";

export function Rating() {
  const { productsListingState, setRating } = useProductListing();
  const {hasRating} = productsListingState;
  const ratingFilterChangeHandler = (event) => {
    setRating(event.target.value)};
  return (
    <fieldset className="form-item status-plain-outline">
      <legend>Rating</legend>
      <p>
        <input
          type="radio"
          checked={hasRating === "4"}
          onChange={ratingFilterChangeHandler}
          id="rating4"
          value="4"
        />
        <label htmlFor="rating4">4 stars and above</label>
      </p>
      <p>
        <input
          type="radio"
          checked={hasRating === "3"}
          onChange={ratingFilterChangeHandler}
          id="rating3"
          value="3"
        />
        <label htmlFor="rating3">3 stars and above</label>
      </p>
      <p>
        <input
          type="radio"
          checked={hasRating === "2"}
          onChange={ratingFilterChangeHandler}
          id="rating2"
          value="2"
        />
        <label htmlFor="rating2">2 stars and above</label>
      </p>
      <p>
        <input
          type="radio"
          checked={hasRating === "1"}
          onChange={ratingFilterChangeHandler}
          id="rating1"
          value="1"
        />
        <label htmlFor="rating1">1 star and above</label>
      </p>
    </fieldset>
  );
}
