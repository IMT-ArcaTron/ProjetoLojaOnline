import React, { useContext } from "react";
import Navbar from "../../components/NavBar";
import ProductCard from "./components/productCard";
import { ProductContext } from "../../controllers/productContext";
import Toast from "./components/toast";

export default function Products() {
  const { allProducts } = useContext(ProductContext);

  return (
    <div>
      <Navbar />
      <div />
      <div className="Container-title">
        <h1 className="title-default">Produtos</h1>
        <Toast />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "0 auto",
          maxWidth: "1000px",
          padding: "20px",
        }}
      >
        {allProducts.length > 0
          ? allProducts.map((product) => (
              <div
                key={product.code}
                style={{
                  flex: "1",
                  margin: "10px",
                  boxSizing: "border-box",
                }}
              >
                <ProductCard product={product} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
