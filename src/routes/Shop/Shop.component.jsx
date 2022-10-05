import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import SpecificCategory from "../specificCategory/specificCategory.component";
import { fetchCategoriesAsync } from "../../store/category/categories.actions";
import "./Shop.styles.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<SpecificCategory />} />
    </Routes>
  );
};
export default Shop;
