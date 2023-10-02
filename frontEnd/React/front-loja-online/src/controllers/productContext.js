import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

function ProductProvider({ children }) {
  //   const { setIsLoading } = useContext(LoadingContext);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3006/products")
      .then((res) => setAllProducts(res.data));
  }, []);

  //   useEffect(() => {
  //     if (data.length > 0) {
  //       setIsLoading(false);
  //     }
  //   }, [data, setIsLoading]);

  return (
    <ProductContext.Provider
      value={{
        allProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
