import { useSelector } from "react-redux";
import {
  SelectProducts,
  SelectLoadingState,
} from "../../store/category/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { ReactComponent as Loader } from "../../assets/loader.svg";
import Hero from "../../components/hero/hero.component";
import { Fragment } from "react";
const CategoriesPreview = () => {
  const products = useSelector(SelectProducts);
  const isLoading = useSelector(SelectLoadingState);
  return (
    <Fragment>
      {isLoading ? (
        <Loader className="loader" />
      ) : (
        <>
          {" "}
          <Hero
            title="Shop now"
            sub_title="Shop from the variety of different collections. "
          ></Hero>
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
        </>
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
