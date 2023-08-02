import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductsContext = createContext({
  //what do you want to store?
  // an array of products
  products: [],
  // next we need a function that would potentially allow us to set those products
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
