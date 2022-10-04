import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { CartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./category/categories.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  products: categoriesReducer,
});
