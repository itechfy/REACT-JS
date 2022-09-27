import "./category.styles.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { title, imageURL } = category;
  return (
    <div
      className="category-container"
      onClick={() => navigate(`/shop/${title.toLowerCase()}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
          filter: `grayscale(100%)`,
        }}
      />
      <div className="category-body-container">
        <h1>{title}</h1>
        <p>Shop now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
