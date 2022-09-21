import "./categories.styles.scss";
import CategoryItem from "../category/category.component";

const Categories = ({ categories }) => {
  return (
    <div>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
