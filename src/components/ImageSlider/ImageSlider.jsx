import React, { useState } from "react";
import img3 from "../../assets/chocolate-wallpaper-3.jpg";
import img2 from "../../assets/chocolate-wallpaper-2.jpg";
import img1 from "../../assets/chocolate-wallpaper-1.jpg";
import { Link } from "react-router-dom";
import "./imageSlider.css";
export const ImageSlider = () => {
  // takes in images as props
  const images = [img1, img2, img3];
  const quotes = [
    "Chocolate is Nature's way of making up for Mondays",
    "Did you notice there are no recipes for leftover chocolate?",
    `“I never met a chocolate I didn't like.” - Deanna Troi`,
  ];
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const nextHandler = () =>
    index + 1 === images.length ? setIndex(0) : setIndex((prev) => prev + 1);

  const previousHandler = () =>
    index - 1 < 0 ? setIndex(images.length - 1) : setIndex((prev) => prev - 1);

  return (
    images.length > 0 && (
      <div className="image-slider">
        <img
          src={images[index]}
          alt={index}
          className="img-responsive size-lg no-expansion"
        />
        <button onClick={previousHandler} className="btn-slider btn-previous">
          &#10094;
        </button>
        <blockquote>{quotes[index]}</blockquote>
        <button onClick={nextHandler} className="btn-slider btn-next">
          &#10095;
        </button>
        <button className="btn btn-link bg-default">
          <Link to="/product-listing">Explore Now</Link>
        </button>
      </div>
    )
  );
};
