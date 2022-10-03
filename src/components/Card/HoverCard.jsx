import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { transformImage, useWindowDimensions } from "utils";

export const HoverCard = ({ item }) => {
  const {width} = useWindowDimensions(); 
  const [hover, setHover] = useState(false);

  const { _id, title, media } = item;
  return (
    <Link to={`/product/${_id}`}>
      <div
        title={title}
        className={`card-container
      ${width < 960 ? "card-vertical" : "card-horizontal"}
      ${hover ? "card-with-overlay" : ""}
      card-hover
      `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && <p className="text text-md text-overlay center-xy"> {title} </p>}
        <section className="card-media">
          <img src={transformImage(media)} alt={title} loading="lazy" />
        </section>
      </div>
    </Link>
  );
};
