import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import SpecificCategory from "../specificCategory/specificCategory.component";
import { setProducts } from "../../store/category/categories.actions";
import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils";
import "./Shop.styles.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const CategoriesMap = await getCategoriesandDocuments();
      //  console.log(CategoriesMap);
      dispatch(setProducts(CategoriesMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<SpecificCategory />} />
    </Routes>
  );
};
export default Shop;
