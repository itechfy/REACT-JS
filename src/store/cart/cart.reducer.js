import { CART_ACTIONS_TYPES } from "./cart.types";

// INITIAL STATES that reducer will use
const INITIAL_STATE = {
  cartItems: [],
};

// R E D U C E R    takes state and action
export const CartReducer = (state = INITIAL_STATE, action = {}) => {
  //  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.ADD_ITEM_TO_CART:
    case CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART:
    case CART_ACTIONS_TYPES.REMOVE_ITEM:
      return {
        ...state, // next standup ( what happens when write it after cartItems) - done
        cartItems: payload,
      };
    case CART_ACTIONS_TYPES.SET_CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    case CART_ACTIONS_TYPES.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: payload,
      };
    default:
      return state;
  }
};
