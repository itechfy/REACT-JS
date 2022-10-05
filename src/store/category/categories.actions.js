import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

export const setProducts = (products) =>
  createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, products);

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (products) =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS, products);
export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE, error);
