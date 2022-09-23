import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutPage = () => {
  const { cartItems, addItemtoCart, removeItemfromCart, removeItemofCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>This is checkout Page</h1>
      <div className="">
        {cartItems.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <span>{item.quantity}</span>
            <br />
            <span onClick={() => removeItemfromCart(item)}>decrement</span>
            <br />
            <span onClick={() => addItemtoCart(item)}>increment</span>| Price{" "}
            {item.price}
            <span onClick={() => removeItemofCart(item)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CheckoutPage;
