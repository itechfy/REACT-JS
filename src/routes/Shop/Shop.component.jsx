import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
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
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Shop;
