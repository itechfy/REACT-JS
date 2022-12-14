import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { netPrice } from "../../store/cart/cart.selector";
//import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Hero from "../../components/hero/hero.component";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(netPrice);

  return cartItems.length > 0 ? (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total : {totalPrice}</span>
    </div>
  ) : (
    <Hero title="No items in cart" sub_title="">
      <img src={require("../../assets/bag-empty.png")} width="250" />
    </Hero>
  );
};
export default CheckoutPage;
