import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import ProductCard from "./components/productCard";
import axios from "axios";
import { ProductContext } from "../../controllers/productContext";

export default function Products() {
  const { allProducts } = useContext(ProductContext);

  return (
    <div>
      <Navbar />
      <div />
      <div className="Container-title">
        <h1 className="title-default">Produtos</h1>
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
