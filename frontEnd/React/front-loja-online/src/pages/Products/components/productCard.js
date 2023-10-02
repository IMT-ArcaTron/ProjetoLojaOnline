import React, { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { OrdersContext } from "../../../controllers/ordersContext";

export default function ProductCard({ product }) {
  const { addOrder } = useContext(OrdersContext);

  return (
    <>
      <div
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        <img style={{ width: "22rem" }} src={product.urlPhoto} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {product.name} - R${product.price}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => addOrder(product.code)}
        >
          <AddShoppingCartIcon />
        </button>
      </div>
    </>
  );
}
