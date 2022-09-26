import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
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
    </div>
  );
};
export default CartItem;
