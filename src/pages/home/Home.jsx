import React from "react";
import { useEffect } from "react";
import { useCategories } from "../../context/categories-context";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
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

  useEffect(() => resetCategories(), []);
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
