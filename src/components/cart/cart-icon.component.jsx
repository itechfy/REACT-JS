import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.component.scss";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-bag.svg";

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default Cart;
