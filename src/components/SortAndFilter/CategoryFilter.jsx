import React from "react";
import { useCategories } from "../../context/categories-context";
import { slugify } from "../../utils/slugify";

export function CategoryFilter() {
  //     setCategoriesAndSubCategories,
  // hasCategories, hasSubCategories,
  const {
    categoryState: MainCategoryState,
    toggleCategoryState,
    toggleSubCategoryState,
    setCategoryError,
    resetCategories,
  } = useCategories();
  const {
    allCategoryDetails: allCategories,
    categoryState,
    subCategoryState,
    categoryError,
  } = MainCategoryState;
  if (categoryError) return <p>An Error Occurred</p>;

  if (!categoryError)
    return (
      <fieldset className="form-item status-plain-outline">
        <button
          className="btn outline-secondary reset-categories"
          onClick={(event) => {
            event.preventDefault();
            resetCategories();
          }}
        >
          Reset Categories
        </button>
        <legend>Category</legend>
        {allCategories &&
          allCategories.map((category) => {
            const { categoryName, _id: id, subCategories } = category;
            const slugifiedName = slugify(categoryName);
            return (
              <section key={id}>
                <i
                  type="checkbox"
                  id={slugifiedName}
                  value={categoryState[id].name}
                  checked={categoryState[id].checked}
                  onChange={() => toggleCategoryState(id)}
                />
                <label htmlFor={slugifiedName}>{categoryName}</label>
                {subCategories &&
                  subCategories.map((sub) => {
                    const { _id: subId, categoryName: subName } = sub;
                    const slugifiedSubName = slugify(subName);
                    return (
                      <p key={subId}>
                        <input
                          type="checkbox"
                          id={slugifiedSubName}
                          value={subCategoryState[subId].name}
                          checked={subCategoryState[subId].checked}
                          onChange={() => toggleSubCategoryState(subId)}
                        />
                        <label htmlFor={slugifiedSubName}>{subName}</label>
                      </p>
                    );
                  })}
              </section>
            );
          })}
      </fieldset>
    );
}
