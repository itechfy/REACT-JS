import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/hero/hero.component";
import ProductCard from "../../components/product-card/product-card.component";
import { ReactComponent as Loader } from "../../assets/loader.svg";
import { useSelector } from "react-redux";
import {
  SelectProducts,
  SelectLoadingState,
} from "../../store/category/categories.selector";
import "./specificCategory.styles.scss";

const SpecificCategory = () => {
  const products = useSelector(SelectProducts);
  const { category } = useParams();
  const [categories, setProducts] = useState(products[category]);

  const isLoading = useSelector(SelectLoadingState);
  useEffect(() => {
    setProducts(products[category]);
  }, [products, category]);

  return (
    <>
      {isLoading ? (
        <Loader className="loader" />
      ) : (
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
      )}
    </>
  );
};
export default SpecificCategory;
