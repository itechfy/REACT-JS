import { useEffect } from "react";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/hero/hero.component";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./specificCategory.styles.scss";

const SpecificCategory = () => {
  const { products } = useContext(ProductsContext);
  const { category } = useParams();
  const [categories, setProducts] = useState(products[category]);

  useEffect(() => {
    setProducts(products[category]);
  }, [products, category]);

  return (
    <>
      <Hero title={category.toUpperCase()} sub_title={"FASHION"}>
        {/* Place any image you like */}
      </Hero>
      <div className="Category-container">
        {categories &&
          categories.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
export default SpecificCategory;
