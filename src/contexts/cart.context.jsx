import { useEffect } from "react";
import { createContext, useReducer, useState } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemtoCart: () => {},
  removeItemfromCart: () => {},
  removeItem: () => {},
  cartCount: 0,
  totalPrice: 0,
});

////////////////////////////////////////////////
////////////////////////////////////////////////
//     R E D U X   S T A R T S   H E R E      //
///////////////////////////////////////////////
///////////////////////////////////////////////

// A C T I O N S   TYPES
export const CART_ACTIONS_TYPES = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
  REMOVE_ITEM: "REMOVE_ITEM",
  SET_CART_COUNT: "SET_CART_COUNT",
  SET_TOTAL_PRICE: "SET_TOTAL_PRICE",
};

// R E D U C E R    takes state and action
const CartReducer = (state, action) => {
  //  console.log(action);
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.ADD_ITEM_TO_CART:
    case CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART:
    case CART_ACTIONS_TYPES.REMOVE_ITEM:
      return {
        ...state,
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
      throw new Error(`Unhandled ${type} not found in CartReducer`);
  }
};

// INITIAL STATES that reducer will use
const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [totalPrice, setTotalPrice] = useState(0);

  const [{ cartItems, cartCount, totalPrice }, dispatch] = useReducer(
    CartReducer,
    INITIAL_STATE
  );

  useEffect(() => {
    //setting total quantity
    const newtotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    dispatch({
      type: CART_ACTIONS_TYPES.SET_CART_COUNT,
      payload: newtotal,
    });

    //counting total price
    const netPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: CART_ACTIONS_TYPES.SET_TOTAL_PRICE,
      payload: netPrice,
    });
  }, [cartItems, cartCount, totalPrice]);

  const addItemtoCart = (product) => {
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART,
      payload: addCartItem(cartItems, product),
    });
  };
  const removeItemfromCart = (product) => {
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART,
      payload: removeCartItem(cartItems, product),
    });
  };
  const removeItemofCart = (product) => {
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_ITEM_FROM_CART,
      payload: removeItem(cartItems, product),
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemtoCart,
    removeItemfromCart,
    removeItemofCart,
    cartItems,
    cartCount,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
