import "./checkout-item.styles.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemtoCart,
  removeItemofCart,
  RemoveItem,
} from "../../store/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="checkout-item-container">
      <class className="image-container">
        <img src={`${imageUrl}`} alt="" />
      </class>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">
        <span onClick={() => dispatch(removeItemofCart(cartItems, cartItem))}>
          &#60;
        </span>
        <span>&nbsp;{quantity}&nbsp;</span>
        <span onClick={() => dispatch(addItemtoCart(cartItems, cartItem))}>
          &#62;
        </span>
      </span>

      <div
        className="remove-button"
        onClick={() => dispatch(RemoveItem(cartItems, cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
