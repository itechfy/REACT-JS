import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

import Button from "../button/button.component";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItems={cartItems} cartItem={item} />
          ))}
        </div>
      ) : (
        <div className="cart-items">Your cart is empty</div>
      )}

      <Button onClick={gotoCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;
