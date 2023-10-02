import React from "react";
import Navbar from "../../components/NavBar";
export default function Success() {
  return (
    <div>
      <Navbar />
      <div />
      <div
        className="Container-title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <p className="title-default">Sua compra foi finalizada com sucesso!</p>
      </div>
    </div>
  );
}
