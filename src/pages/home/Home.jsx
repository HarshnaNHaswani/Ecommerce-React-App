import React from "react";
import { useEffect } from "react";
import { useCategories } from "context";
import { ImageSlider } from "components";
import "./home.css";
import { FeaturedCategoriesCard } from "./FeaturedCategoriesCard";

export const Home = () => {
  const { categoryState } = useCategories();
  const allSubCategories = categoryState.allCategoryDetails.reduce(
    (acc, category) => [...acc, ...category.subCategories],
    []
  );
  const featuredCategories = allSubCategories.filter(
    (subCategory) => subCategory.featured
  );

  const { resetCategories } = useCategories();

  useEffect(() =>{
    resetCategories()
    window.scrollTo(0,0)
  }, []);
  return (
    <>
      <h2>Meltin' Moments</h2>
      <section>
        <ImageSlider />
        <h3>Featured Categories</h3>
        <div className="grid-container grid-fit">
          {featuredCategories.map((category) => (
            <FeaturedCategoriesCard key={category["_id"]} category={category} />
          ))}
        </div>
      </section>
    </>
  );
};
