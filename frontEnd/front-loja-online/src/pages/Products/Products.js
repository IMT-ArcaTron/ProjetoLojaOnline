import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import ProductCard from "./components/productCard";
import axios from "axios";
import { ProductContext } from "../../controllers/productContext";

export default function Products() {
  const { allProducts } = useContext(ProductContext);
  console.log(allProducts);
  return (
    <div>
      <Navbar />
      <div />
      <div className="Container-title">
        <h1 className="title-default">Produtos</h1>
      </div>
      {allProducts.length > 0
        ? allProducts.map((product) => {
            console.log(product.name);
            return (
              <div key={product.code}>
                <ProductCard product={product} />
              </div>
            );
          })
        : ""}
    </div>
  );
}
