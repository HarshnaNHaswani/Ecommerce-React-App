import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useWindowDimension } from "../../context/window-context";

export const HoverCard = ({ item }) => {
  const {windowWidth} = useWindowDimension()

  const [hover, setHover] = useState(false);

  const { _id, title, media } = item;
  return (
    <Link to={`/product/${_id}`}>
      <div
        title={title}
        className={`card-container
      ${windowWidth < 960 ? "card-vertical" : "card-horizontal"}
      ${hover ? "card-with-overlay" : ""}
      card-hover
      `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && <p className="text text-md text-overlay center-xy"> {title} </p>}
        <section className="card-media">
          <img src={media} alt={title} loading="lazy" />
        </section>
      </div>
    </Link>
  );
};
