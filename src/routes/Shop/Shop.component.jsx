import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import SpecificCategory from "../specificCategory/specificCategory.component";
import "./Shop.styles.scss";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<SpecificCategory />} />
    </Routes>
  );
};
export default Shop;
