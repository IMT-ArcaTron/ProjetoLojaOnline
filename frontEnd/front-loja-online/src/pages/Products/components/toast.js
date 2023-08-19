import React, { useContext } from "react";
import { OrdersContext } from "../../../controllers/ordersContext";

export default function Toast() {
  const { showSuccessToast } = useContext(OrdersContext);
  if (showSuccessToast) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "350px",
          height: "70px",
          background: "#10f000",
          position: "fixed",
          top: "100px",
          right: "20px",
          zIndex: 1000,
          borderRadius: "20px",
          flexDirection: "column",
        }}
      >
        <h5>Produto adicionado!</h5>
        <h5>Verifique o seu carrinho</h5>
      </div>
    );
  } else {
    return <></>;
  }
}
