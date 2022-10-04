import "./cart-item.styles.scss";
import { RemoveItem } from "../../store/cart/cart.actions";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItems, cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} x {price}
        </span>
      </div>
      <div
        className="remove-button"
        onClick={() => dispatch(RemoveItem(cartItems, cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};
export default CartItem;
