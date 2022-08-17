import React from "react";
import { Link } from "react-router-dom";
import { useWindowDimension } from "context";
import "./card.css";
export const Card = ({ product, children }) => {
  const {
    _id,
    id,
    price,
    title,
    rating,
    inStock,
    media,
    reviewers,
    featured,
    fastDelivery,
    discount,
  } = product;
  const { windowDimension } = useWindowDimension();
  const { windowWidth } = windowDimension;
  return (
    <div
      title={title}
      className={`card-container
       ${windowWidth < 960 ? "card-vertical" : "card-horizontal"}
       ${!inStock ? "card-with-overlay" : ""}
       ${featured && inStock ? "badge-wrapper" : ""}
      `}
    >
      {!inStock && <p className="text text-md text-overlay"> Out of Stock </p>}
      {featured && inStock && (
        <p className="badge badge-left badge-md status-idle-bg">Featured</p>
      )}
      <Link to={`/product/${_id}`}>
        <section className="card-media">
          <img src={media} alt={title} loading="lazy" />
        </section>
      </Link>
      <section className="card-content">
        <Link to={`/product/${_id}`}>
          <header className="card-header">
            <h2
              className={`"heading ${
                windowWidth < 960 ? "heading-sm" : "heading-xs"
              }"`}
            >
              {title}
            </h2>
          </header>
          <section className="card-body">
            <p>
              <span>Price: </span>{" "}
              {discount <= 0 && <strong className="number">{price}</strong>}
              {discount > 0 && (
                <span>
                  <strike>{price}</strike>{" "}
                  <strong className="number">{price - discount}</strong>
                </span>
              )}
            </p>
            {fastDelivery && (
              <small>
                <em>has fast delivery</em>
              </small>
            )}
            <div className="rating-wrapper wrap-color disableElement">
              <input
                type="radio"
                name={`rating-${id}`}
                id={`solid-star-${id}-5`}
                readOnly
                checked={Math.round(rating) === 5}
              />
              <label htmlFor={`solid-star-${id}-5`}>★</label>

              <input
                type="radio"
                name={`rating-${id}`}
                id={`solid-star-${id}-4`}
                readOnly
                checked={Math.round(rating) === 4}
              />
              <label htmlFor={`solid-star-${id}-4`}>★</label>

              <input
                type="radio"
                name={`rating-${id}`}
                id={`solid-star-${id}-3`}
                readOnly
                checked={Math.round(rating) === 3}
              />
              <label htmlFor={`solid-star-${id}-3`}>★</label>

              <input
                type="radio"
                name={`rating-${id}`}
                id={`solid-star-${id}-2`}
                readOnly
                checked={Math.round(rating) === 2}
              />
              <label htmlFor={`solid-star-${id}-2`}>★</label>

              <input
                type="radio"
                name={`rating-${id}`}
                id={`solid-star-${id}-1`}
                readOnly
                checked={Math.round(rating) === 1}
              />
              <label htmlFor={`solid-star-${id}-1`}>★</label>
            </div>
            <small>
              reviews:<span className="number">{`(${reviewers})`}</span>{" "}
            </small>
          </section>
        </Link>
        <footer
          className={`card-actions ${
            windowWidth < 960 ? "center-xy" : "center-y"
          }`}
        >
          {children}
        </footer>
      </section>
    </div>
  );
};
