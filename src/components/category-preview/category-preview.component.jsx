import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  return (
    <div className="category-preview-container">
      <div className="category-header">
        <h2>{title.toUpperCase()}</h2>
        <div className="view-more-btn">
          <Button
            buttonType=""
            onClick={() => navigate(`/shop/${title.toLowerCase()}`)}
          >
            View more
          </Button>
        </div>
      </div>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard
              key={product.id}
              cartItems={cartItems}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
