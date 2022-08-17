export const productsListingReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL_DATA": {
      const { least, max } = [...action.payload].reduce(
        (acc, { price }) => ({
          ...acc,
          least: Number(price) < acc.least ? Number(price) : acc.least,
          max: Number(price) > acc.max ? Number(price) : acc.max,
        }),
        { least: 99999999, max: 0 }
      );
      return {
        ...state,
        products: [...state.products, ...action.payload],
        lowestPrice: least,
        highestPrice: max,
      };
    }
    case "SET_SERVER_ERROR": {
      return {
        ...state,
        productListingError: {
          ...state.productListingError,
          serverError:
            "Unable to retrieve data at the moment, please try again later!",
        },
      };
    }
    case "SET_CLIENT_ERROR": {
      return {
        ...state,
        productListingError: {
          ...state.productListingError,
          clientError: action.payload,
        },
      };
    }
    case "SORT_BY_PRICE": {
      return {
        ...state,
        sortByPrice: action.payload,
      };
    }
    case "TOGGLE_IN_STOCK_FILTER": {
      return {
        ...state,
        isInStockFilter: !state.isInStockFilter,
      };
    }
    case "TOGGLE_Is_FEATURED_FILTER": {
      return {
        ...state,
        isFeaturedFilter: !state.isFeaturedFilter,
      };
    }
    case "TOGGLE_HAS_FAS_DELIVERY": {
      return {
        ...state,
        hasFastDelivery: !state.hasFastDelivery,
      };
    }
    case "SET_RATING": {
      return {
        ...state,
        hasRating: action.payload,
      };
    }
    case "SET_SEARCH_DATA": {
      return {
        ...state,
        searchData: [...action.payload],
      };
    }
    case "SET_MINPRICE": {
      return {
        ...state,
        minPrice: action.payload,
      };
    }
    case "UPDATE_CATEGORY_FILTER": {
      const { categoryState, subCategoryState } = action.payload;
      const categoryKeys = Object.keys(categoryState);
      const subCategoryKeys = Object.keys(subCategoryState);
      return {
        ...state,
        hasCategories: [...categoryKeys].reduce(
          (acc, key) =>
            categoryState[key].checked
              ? [...acc, categoryState[key].name]
              : acc,
          []
        ),
        hasSubCategories: [...subCategoryKeys].reduce(
          (acc, key) =>
            subCategoryState[key].checked
              ? [...acc, subCategoryState[key].name]
              : acc,
          []
        ),
      };
    }
    case "UPDATE_SUBCATEGORY_FILTER": {
      const { subCategoryState } = action.payload;
      const subCategoryKeys = Object.keys(subCategoryState);
      return {
        ...state,
        hasSubCategories: [...subCategoryKeys].reduce(
          (acc, key) =>
            subCategoryState[key].checked
              ? [...acc, subCategoryState[key].name]
              : acc,
          []
        ),
      };
    }
    case "RESET": {
      return {
        ...state,
        isInStockFilter: false,
        isFeaturedFilter: false,
        hasFastDelivery: false,
        hasRating: 0,
        hasCategories: [],
        hasSubCategories: [],
        searchData: [],
        minPrice: 50,
        sortByPrice: null,
        lowestPrice: 0,
        highestPrice: 0,
      };
    }
    default:
      return state;
  }
};
