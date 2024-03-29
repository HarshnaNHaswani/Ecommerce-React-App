import React from "react";
import { useCategories } from "context";
import { slugify } from "utils";

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
        {allCategories.length > 0 &&
          allCategories.map((category) => {
            const { categoryName, _id: id, subCategories } = category;
            const slugifiedName = slugify(categoryName);
            return (
              <ul key={id}>
                <li >
                <input
                  type="checkbox"
                  id={slugifiedName}
                  value={categoryState[id].name}
                  checked={categoryState[id].checked}
                  onChange={() => toggleCategoryState(id)}
                />
                <label htmlFor={slugifiedName} className="strong">
                  {categoryName}
                </label>
                {subCategories.length > 0 && (
                  <ul className="list">
                    {subCategories.map((sub) => {
                      const { _id: subId, categoryName: subName } = sub;
                      const slugifiedSubName = slugify(subName);
                      return (
                        <li key={subId} className="list-item">
                          <input
                            type="checkbox"
                            id={slugifiedSubName}
                            value={subCategoryState[subId].name}
                            checked={subCategoryState[subId].checked}
                            onChange={() => toggleSubCategoryState(subId)}
                          />
                          <label htmlFor={slugifiedSubName}>{subName}</label>
                        </li>
                      );
                    })}
                  </ul>
                )}
                </li>
              </ul>
            );
          })}
      </fieldset>
    );
}
