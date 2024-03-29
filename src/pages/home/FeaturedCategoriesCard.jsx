import React from "react";
import { useNavigate } from "react-router-dom";
import { useCategories } from "context";
import { transformImage } from "utils";

export function FeaturedCategoriesCard({ category }) {
  const { toggleSubCategoryState } = useCategories();
  const navigate = useNavigate();

  const featuredCategoryHandler = (id) => {
    toggleSubCategoryState(id);
    navigate("/product-listing");
  };
  const { categoryName, _id, media, description } = category;
  return (
    <div
      className="card-container card-vertical grid-child"
      title={categoryName}
      onClick={() => featuredCategoryHandler(_id)}
    >
      <section className="card-media">
        <img src={transformImage(media)} alt={categoryName} loading='lazy'/>
      </section>
      <section className="card-content">
        <header className="card-header">
          <h2 className="heading heading-sm">{categoryName}</h2>
          <p className="text text-sm">{description}</p>
        </header>
      </section>
    </div>
  );
}
