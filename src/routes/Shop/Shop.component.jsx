import { ProductsContext } from "../../contexts/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Hero from "../../components/hero/hero.component";
import "./Shop.styles.scss";
import { useContext } from "react";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <Hero
        title="Shop now"
        sub_title="Shop from the variety of different collections. "
      ></Hero>
      <div className="shop-container">
        {Object.keys(products).map((title) => {
          const SpecificProducts = products[title];
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={SpecificProducts}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
