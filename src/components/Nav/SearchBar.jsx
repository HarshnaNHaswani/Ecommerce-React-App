import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alert-context";
import { useCategories } from "../../context/categories-context";
import { useProductListing } from "../../context/product-listing-context";
import { slugify } from "../../utils/slugify";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const initialDataState = {
    categoryDataList: [],
    subCategoryDataList: [],
    titleDataList: [],
  };
  const [dataList, setDataList] = useState(initialDataState);
  const { showAlert } = useAlert();
  const { setSearchData, productsListingState } = useProductListing();
  const {
    categoryState,
    toggleCategoryState,
    toggleSubCategoryState,
    resetCategories,
  } = useCategories();
  const clearSearch = () => {
    if (productsListingState.searchText !== "") setSearchData([]);
    setSearch("");
  };
  const navigate = useNavigate();
  const searchHandler = () => {
    if (search.length < 3) {
      showAlert({ status: "error", text: "minimum search input length: 3" });
      clearSearch();
    } else {
      const searchText = search;
      const searchType = type;
      setSearch("");
      setType("");
      switch (type) {
        case "product": {
          const [product] = dataList.titleDataList;
          setDataList(initialDataState);
          navigate(`/product/${product._id}`);
          break;
        }
        case "category": {
          const [category] = dataList.categoryDataList;
          toggleCategoryState(category._id);
          setDataList(initialDataState);
          navigate("/product-listing");
          break;
        }
        case "subCategory": {
          const [subCategory] = dataList.subCategoryDataList;
          toggleSubCategoryState(subCategory._id);
          setDataList(initialDataState);
          navigate("/product-listing");
          break;
        }

        default:
          
          break;
      }
    }
  };
  const [type, setType] = useState("");

  const isInString = (string, subString) =>
    string.toLowerCase().includes(subString.toLowerCase());
  const sortOnBool = (array, key) =>
    array.sort((a, b) => Number(b[key]) - Number(a[key]));
  useEffect(() => {
    resetCategories();
  }, []);

  useEffect(() => {
    if (!search) {
      setDataList({ categoryDataList: [], titleDataList: [] });
    }
    if (search) {
      const { products } = productsListingState;
      const { allCategoryDetails } = categoryState;
      const titleDataList = products.reduce(
        (acc, product) =>
          isInString(product.title, search)
            ? [
                ...acc,
                {
                  title: product.title,
                  _id: product._id,
                  featured: product.featured,
                },
              ]
            : acc,
        []
      );
      const categoryDataList = allCategoryDetails.reduce((acc, category) => {
        const { _id, categoryName } = category;
        return isInString(categoryName, search)
          ? [...acc, { _id, categoryName }]
          : acc;
      }, []);

      const subCategoryDataList = allCategoryDetails
        .map((category) =>
          category.subCategories.reduce((acc, currSubCategory) => {
            return isInString(currSubCategory.categoryName, search)
              ? [
                  ...acc,
                  {
                    _id: currSubCategory._id,
                    categoryName: currSubCategory.categoryName,
                    featured: currSubCategory.featured,
                  },
                ]
              : acc;
          }, [])
        )
        .flat();
      setDataList({
        categoryDataList: categoryDataList,
        subCategoryDataList: sortOnBool(subCategoryDataList, "featured"),
        titleDataList: sortOnBool(titleDataList, "featured"),
      });
    }
  }, [search]);

  const DataOptions = () => {
    const { categoryDataList, subCategoryDataList, titleDataList } = dataList;
    return (
      <>
        {categoryDataList && categoryDataList.length > 0 && (
          <li className="list-item">
            <strong>Categories </strong>
            <ul className="list list-bulleted sub-search-data-list">
              {categoryDataList.slice(0, 2).map((category) => (
                <li
                  value={category.categoryName}
                  className="list-item category-data"
                  key={slugify(category.categoryName)}
                  onClick={() => {
                    setSearch(category.categoryName);
                    setType("category");
                  }}
                >
                  in: {category.categoryName}
                </li>
              ))}
            </ul>
          </li>
        )}

        {subCategoryDataList && subCategoryDataList.length > 0 && (
          <li className="list-item">
            <strong>Sub-categories </strong>
            <ul className="list list-bulleted">
              {subCategoryDataList.slice(0, 2).map((category) => (
                <li
                  value={category.categoryName}
                  className="list-item sub-category-data"
                  key={slugify(category.categoryName)}
                  onClick={() => {
                    setSearch(category.categoryName);
                    setType("subCategory");
                  }}
                >
                  in: {category.categoryName}
                </li>
              ))}
            </ul>
          </li>
        )}
        {titleDataList && titleDataList.length > 0 && (
          <li className="list-item">
            <strong>Products </strong>
            <ul className="list">
              {titleDataList.slice(0, 3).map((product) => (
                <li
                  className="list-item product-data"
                  key={slugify(product.title)}
                  onClick={() => {
                    setSearch(product.title);
                    setType("product");
                  }}
                >
                  {" "}
                  {product.title}
                </li>
              ))}
            </ul>
          </li>
        )}
      </>
    );
  };
  const [hover, setHover] = useState(false);
  const [isFocussed, setIsFocussed] = useState(true);
  return (
    <div className="search-wrapper">
      <div
        className="form-item status-plain-outline bg-default search-input-wrapper"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          placeholder="search"
          aria-label="search"
          minLength={3}
          // autoComplete="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        {hover && (
          <button
            onClick={clearSearch}
            title="clear search"
            className="btn btn-icon clear-search"
          >
            &times;
          </button>
        )}
        <button
          className="btn btn-icon bg-default btn-search"
          onClick={searchHandler}
        >
          <i>&#128269;</i>
        </button>
      </div>
      {isFocussed && search && (
        <ul
          // id="search-data-list"
          className="list list-stacked search-data-list bg-accent"
        >
          <DataOptions />
        </ul>
      )}
    </div>
  );
}
