import "./category.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageURL } = category;
  return (
    <div className="category-container">
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
