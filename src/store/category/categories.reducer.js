import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
  products: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  console.log(state);
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
