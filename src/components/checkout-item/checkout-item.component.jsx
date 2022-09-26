import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemofCart, addItemtoCart, removeItemfromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <class className="image-container">
        <img src={`${imageUrl}`} alt="" />
      </class>
      <span className="name">{name}</span>

      <span className="quantity">
        <span onClick={() => removeItemfromCart(cartItem)}>&#60;</span>
        <span>&nbsp;{quantity}&nbsp;</span>
        <span onClick={() => addItemtoCart(cartItem)}>&#62;</span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemofCart(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
