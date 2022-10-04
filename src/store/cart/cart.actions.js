import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPES } from "./cart.types";

// add item to cart
const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};
// remove cart item
const removeCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem.quantity === 1) {
    //retain the items that are not equal to this product received.
    //return new array
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
// removing item
const removeItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem) {
    //retain the items that are not equal to this product received.
    //return new array
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItemtoCart = (cartItems, product) => {
  const cartState = addCartItem(cartItems, product);
  return createAction(CART_ACTIONS_TYPES.ADD_ITEM_TO_CART, cartState);
};

export const removeItemofCart = (cartItems, product) => {
  const cartState = removeCartItem(cartItems, product);
  return createAction(CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART, cartState);
};
export const RemoveItem = (cartItems, product) => {
  const cartState = removeItem(cartItems, product);
  return createAction(CART_ACTIONS_TYPES.REMOVE_ITEM, cartState);
};
// export const TotalQuantity = (cartItems) => {
//   // const totalQuantity = newtotal(cartItems);
//   return createAction(CART_ACTIONS_TYPES.REMOVE_ITEM, newtotal(cartItems));
// };
// export const TotalPrice = (cartItems) => {
//   // const totalPrice = netPrice(cartItems);
//   return createAction(CART_ACTIONS_TYPES.REMOVE_ITEM, netPrice(cartItems));
// };
