import "./cart-item.styles.scss";
import { useContext } from "react";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ cartItem }) => {
  const { removeItemofCart } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} X {price}
        </span>
      </div>
      <div className="remove-button" onClick={() => removeItemofCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
export default CartItem;
