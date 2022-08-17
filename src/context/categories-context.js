import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { categoriesReducer } from 'reducers';

const CategoriesContext = createContext();
const initialState = {
  allCategoryDetails: [],
  // categoryState inside categoryState => needs name change
  categoryState: {},
  subCategoryState:{},
  categoryError: null
}
const CategoriesProvider = ({ children }) => {
 const [categoryState, categoryDispatch] = useReducer(categoriesReducer, initialState)
  useEffect(
    () =>
      (async () => {
        try {
          const response = await axios.get("/api/categories");
          if (response.status === 200) {
            categoryDispatch({type:'SET_INITIAL_CATEGORIES', payload: response.data.categories})
          } else {
            categoryDispatch({type:'SET_ERROR', payload: 'unable to fetch data, please try again later'})
          }
        } catch (err) {
          categoryDispatch({type:'SET_ERROR', payload: 'An error Occured'})
        }
      })(),
    []
  );
  const toggleCategoryState = (id) => categoryDispatch({type:"TOGGLE_CATEGORY_STATE", payload: id})
  const toggleSubCategoryState = (id) => categoryDispatch({type:"TOGGLE_SUBCATEGORY_STATE", payload: id})
  const setCategoryError = (val) => categoryDispatch({type:'SET_ERROR', payload: val})
  const resetCategories = () => {categoryDispatch({type: "RESET_CATEGORY_STATES"})}
  return (
    <CategoriesContext.Provider
      value={{
        categoryState,
        toggleCategoryState,
        toggleSubCategoryState,
        setCategoryError,
        resetCategories
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => useContext(CategoriesContext);

export { CategoriesProvider, useCategories };

