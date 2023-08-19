import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import "./CarShop.css";
import OrderCard from "./components/orderCard";
import { OrdersContext } from "../../controllers/ordersContext";
export default function CarShop() {
  const { orders, total } = useContext(OrdersContext);

  return (
    <div>
      <Navbar />
      <div />
      <header className="Container-title">
        <h1 className="title-default">Finalizar compra</h1>
      </header>
      <section className="scrollable-section">
        {orders.length > 0 ? (
          orders.map((order) => (
            <OrderCard order={order.product[0]} quantity={order.quantity} />
          ))
        ) : (
          <div>Seu carrinho está vazio</div>
        )}
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {orders.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                padding: "10px 80px",
                background: "#284184",
                color: "#00EAFF",
                fontSize: "24px",
                marginBottom: "10px",
              }}
            >
              Total
            </div>
            <div
              style={{
                padding: "10px 80px",
                background: "#284184",
                color: "#00EAFF",
                fontSize: "24px",
              }}
            >
              R$ {total}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
