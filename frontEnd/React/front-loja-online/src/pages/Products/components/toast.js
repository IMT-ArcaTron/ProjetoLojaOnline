import React, { useContext, useEffect, useState } from "react";
import { OrdersContext } from "../../../controllers/ordersContext";

export default function Toast() {
  const { showSuccessToast, toastProgress } = useContext(OrdersContext);

  if (showSuccessToast) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "360px",
          height: "70px",
          background: "#10f000",
          position: "fixed",
          top: "100px",
          right: "20px",
          zIndex: 1000,
          borderRadius: "20px 20px 0px 0px",
          flexDirection: "column",
        }}
      >
        <h5>Produto adicionado!</h5>
        <h5>Verifique o seu carrinho</h5>

        <div
          style={{
            height: "10px",
            background: "#0e420b",
            width: `${toastProgress}%`,
            transition: "width 0.2s ease",
          }}
        ></div>
      </div>
    );
  } else {
    return <></>;
  }
}
