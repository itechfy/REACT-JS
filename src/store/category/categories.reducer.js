import { CATEGORIES_ACTIONS_TYPES } from "./categories.types";

const CATEGORIES_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  console.log(state);
  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };

    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
