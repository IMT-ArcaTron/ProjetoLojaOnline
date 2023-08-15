import React from "react";

export default function ProductCard({ product }) {
  console.log("product no ProductCard:", product);
  console.log("product.urlPhoto:", product.urlPhoto);
  return (
    <>
      <div>
        <img style={{ width: "16rem" }} src={product.urlPhoto} />
      </div>
      <div>
        {product.name} - {product.price}
      </div>
    </>
  );
}
