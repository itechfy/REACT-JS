import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectTotal } from "../../store/cart/cart.selector";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.component.scss";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-bag.svg";

const Cart = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const cartCount = useSelector(selectTotal);

  const toggle = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <CartIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
