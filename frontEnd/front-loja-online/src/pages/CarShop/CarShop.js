import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";
import "./CarShop.css";
import OrderCard from "./components/orderCard";
import { OrdersContext } from "../../controllers/ordersContext";
export default function CarShop() {
  const { orders, total, resetState } = useContext(OrdersContext);

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            Seu carrinho está vazio
          </div>
        )}
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              padding: "3px 40px",
              background: "#284184",
              color: "#00EAFF",
              fontSize: "24px",
              marginBottom: "10px",
              textAlign: "center",
              borderRadius: "5px 5px 0 0",
              maxWidth: "270px",
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
              borderRadius: "0 0 5px 5px",
              maxWidth: "270px",
            }}
          >
            R$ {total}
          </div>
        </div>
        {orders.length > 0 ? (
          <div style={{ marginTop: "40%" }} onClick={() => resetState()}>
            <Link to="/success">
              <div className="button-default">Comprar</div>
            </Link>
          </div>
        ) : (
          <div style={{ marginTop: "40%" }}>
            <Link>
              <div className="button-default">Comprar</div>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
