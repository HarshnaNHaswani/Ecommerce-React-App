export const categoriesReducer = (state, action) => {
  // const reducer = () => {

  // }
  switch (action.type) {
    case "SET_INITIAL_CATEGORIES": {
      const { category, subCategory } = [...action.payload].reduce(
        (acc, currCategory) => {
          if (currCategory.subCategories) {
            return {
              ...acc,
              category: {
                ...acc.category,
                [currCategory["_id"]]: {
                  name: currCategory.categoryName,
                  checked: false,
                },
              },
              subCategory: {
                ...acc.subCategory,
                ...[...currCategory.subCategories].reduce(
                  (subAcc, currSubCategory) => {
                    return {
                      ...subAcc,
                      [currSubCategory["_id"]]: {
                        name: currSubCategory.categoryName,
                        checked: false,
                      },
                    };
                  },
                  {}
                ),
              },
            };
          } else {
            return {
              ...acc,
              category: {
                ...acc.category,
                [currCategory["_id"]]: {
                  name: currCategory.categoryName,
                  checked: false,
                },
              },
            };
          }
        },
        { category: {}, subCategory: {} }
      );

      return {
        ...state,
        allCategoryDetails: action.payload,
        categoryState: category,
        subCategoryState: subCategory,
      };
    }
    case "TOGGLE_CATEGORY_STATE": {
      const { categoryState } = state;
      const subCategoriesForThisCategory = state.allCategoryDetails.reduce(
        (acc, category) =>
          category["_id"] === action.payload ? category.subCategories : acc,
        []
      );
      const updatedSubCategoryStateForCategory = [
        ...subCategoriesForThisCategory,
      ].reduce(
        (acc, currCat) => ({
          ...acc,
          [currCat["_id"]]: {
            name: currCat.categoryName,
            checked: !categoryState[action.payload].checked,
          },
        }),
        {}
      );
      return {
        ...state,
        categoryState: {
          ...categoryState,
          [action.payload]: {
            ...categoryState[action.payload],
            checked: !categoryState[action.payload].checked,
          },
        },
        subCategoryState: {
          ...state.subCategoryState,
          ...updatedSubCategoryStateForCategory,
        },
      };
    }
    case "TOGGLE_SUBCATEGORY_STATE": {
      const { subCategoryState } = state;
      return {
        ...state,
        subCategoryState: {
          ...subCategoryState,
          [action.payload]: {
            ...subCategoryState[action.payload],
            checked: !subCategoryState[action.payload].checked,
          },
        },
      };
    }
    case "RESET_CATEGORY_STATES": {
      const categoryKeys = Object.keys(state.categoryState);
      const subCategoryKeys = Object.keys(state.subCategoryState);
      const resetCategories = [...categoryKeys].reduce((acc, currKey) => {
        return {
          ...acc,
          [currKey]: {
            ...state.categoryState[currKey],
            checked: false,
          },
        };
      }, {});
      const resetSubCategories = [...subCategoryKeys].reduce((acc, currKey) => {
        return {
          ...acc,
          [currKey]: {
            ...state.subCategoryState[currKey],
            checked: false,
          },
        };
      }, {});

      return {
        ...state,
        categoryState: resetCategories,
        subCategoryState: resetSubCategories,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        categoryError: action.payload,
      };
    }
    default:
      return state;
  }
};
