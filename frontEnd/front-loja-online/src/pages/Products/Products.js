import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>PAGINA DE PRODUTOS</h1>
      <Link to={"/login"}>
        <button>Sair</button>
      </Link>
    </div>
  );
}
