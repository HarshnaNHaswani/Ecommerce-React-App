import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../../context/categories-context";
import {ImageSlider} from "../../components/ImageSlider/ImageSlider";
import "./home.css";
import { useAuth } from "../../context/auth-context";

export const Home = () => {
  const { categoryState } = useCategories();
  const navigate = useNavigate();
  const  {isLoggedIn} = useAuth()
  const allSubCategories = categoryState.allCategoryDetails.reduce(
    (acc, category) => [...acc, ...category.subCategories],
    []
  );
  const featuredCategories = allSubCategories.filter(
    (subCategory) => subCategory.featured
  );

  const { toggleSubCategoryState, resetCategories} = useCategories();
  const featuredCategoryHandler = (id) => {
    toggleSubCategoryState(id);
    navigate("/product-listing");
  };
  useEffect(() => resetCategories(), [])
  return (
    <>
      <h2>Meltin' Moments</h2>
      <section>
        <ImageSlider />
        <h3>Featured Categories</h3>
        <div className="grid-container grid-fit">
          {featuredCategories.map(
            ({ categoryName, _id, media, description }) => (
              <div
                className="card-container card-vertical grid-child"
                title={categoryName}
                key={_id}
                onClick={() => featuredCategoryHandler(_id)}
              >
                <section className="card-media">
                  <img src={media} alt="" />
                </section>
                <section className="card-content">
                  <header className="card-header">
                    <h2 className="heading heading-sm">{categoryName}</h2>
                    <p className="text text-sm">{description}</p>
                  </header>
                </section>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};
