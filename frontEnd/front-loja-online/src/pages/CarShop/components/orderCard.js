import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { OrdersContext } from "../../../controllers/ordersContext";

export default function OrderCard({ order, quantity }) {
  const { removeOrder } = useContext(OrdersContext);

  return (
    <>
      <div
        style={{ padding: "10px", display: "flex", justifyContent: "center" }}
      >
        <img style={{ width: "22rem" }} src={order.urlPhoto} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <strong>{quantity}x</strong> {order.name} - R${order.price}
        <button
          style={{
            background: "#284184",
            border: "none",
            padding: "6px 10px",
            borderRadius: "5px",
          }}
          onClick={() => removeOrder(order.code)}
        >
          <DeleteIcon style={{ color: "#00EAFF" }} />
        </button>
      </div>
    </>
  );
}
