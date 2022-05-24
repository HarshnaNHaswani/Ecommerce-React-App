import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { useContext } from "react";
import { productsListingReducer } from "../reducers/productsListingReducer";
import axios from "axios";
import { useCategories } from "./categories-context";

const initialState = {
  products: [],
  productListingError: {
    serverError: null, //read-only
    clientError: null, //read-and-write
    loading: false,
  },
  isInStockFilter: false,
  isFeaturedFilter: false,
  hasFastDelivery: false,
  hasRating: 0,
  hasCategories: [],
  hasSubCategories: [],
  minPrice: 50,
  sortByPrice: null,
  lowestPrice: 0,
  highestPrice: 0,
};
const ProductsListingContext = createContext();

const ProductsListingProvider = ({ children }) => {
  const [productsListingState, productsListingsDispatch] = useReducer(
    productsListingReducer,
    initialState
  );
  const { resetCategories } = useCategories();
  const sortProductsByPrice = (val) =>
    productsListingsDispatch({ type: "SORT_BY_PRICE", payload: val });

  const setRating = (val) =>
    productsListingsDispatch({ type: "SET_RATING", payload: val });

  const setMinPrice = (val) =>
    productsListingsDispatch({ type: "SET_MINPRICE", payload: val });

  const { categoryState } = useCategories();

  const updateCategoryFilter = () =>
    productsListingsDispatch({
      type: "UPDATE_CATEGORY_FILTER",
      payload: categoryState,
    });
  const updateSubCategoryFilter = () =>
    productsListingsDispatch({
      type: "UPDATE_SUBCATEGORY_FILTER",
      payload: categoryState,
    });

  const toggleInStockFilter = () =>
    productsListingsDispatch({ type: "TOGGLE_IN_STOCK_FILTER" });
  const toggleIsFeaturedFilter = () =>
    productsListingsDispatch({ type: "TOGGLE_Is_FEATURED_FILTER" });
  const toggleHasFastDelivery = () =>
    productsListingsDispatch({ type: "TOGGLE_HAS_FAST_DELIVERY" });

  const resetSortAndFilters = () => {
    resetCategories();
    productsListingsDispatch({ type: "RESET" });
  };

  const setProductsError = (val) =>
    productsListingReducer({ type: "SET_CLIENT_ERROR", payload: val });

  useEffect(() => {
    updateCategoryFilter();
  }, [categoryState.categoryState]);
  useEffect(() => {
    updateSubCategoryFilter();
  }, [categoryState.subCategoryState]);

  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/products");
          if (response.status === 200) {
            productsListingsDispatch({
              type: "SET_INITIAL_DATA",
              payload: response.data.products,
            });
          } else {
            productsListingsDispatch({ type: "SET_SERVER_ERROR" });
          }
        } catch (err) {
          productsListingsDispatch({ type: "SET_SERVER_ERROR" });
        }
      })(),
    []
  );
  return (
    <ProductsListingContext.Provider
      value={{
        productsListingState,
        setMinPrice,
        setProductsError,
        setRating,
        toggleInStockFilter,
        resetSortAndFilters,
        sortProductsByPrice,
        updateCategoryFilter,
        updateSubCategoryFilter,
        toggleIsFeaturedFilter,
        toggleHasFastDelivery
      }}
    >
      {children}
    </ProductsListingContext.Provider>
  );
};

const useProductListing = () => useContext(ProductsListingContext);

export { ProductsListingProvider, useProductListing };
