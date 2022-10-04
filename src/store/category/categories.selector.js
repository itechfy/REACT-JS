import { createSelector } from "reselect";

const selectProductsReducer = (state) => state.products;

//checks if input changes or not
export const selectCategories = createSelector(
  [selectProductsReducer], //input
  (productSlice) => productSlice.products //output
);

//////////////////////////////////////////////////////////////
// fetched data that is already in products using selectors
//////////////////////////////////////////////////////////////
export const SelectProducts = createSelector([selectCategories], (products) =>
  products.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);
