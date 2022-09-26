import { createContext, useState, useEffect } from "react";
import { getCategoriesandDocuments } from "../utils/firebase/firebase.utils";
import ShopData from "../data/shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const CategoriesMap = await getCategoriesandDocuments();
      console.log(CategoriesMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
