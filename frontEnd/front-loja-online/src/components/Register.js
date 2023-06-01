import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registre-se</h3>
          <div className="text-center">
            Já possui conta?{" "}
            <Link to={"/login"}>
              <span className="link-primary">Entrar</span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Nome </label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Ahmad Kheder Mahfoud"
            />
          </div>
          <div className="form-group mt-3">
            <label>Telefone </label>
            <input
              type="phone"
              className="form-control mt-1"
              placeholder="(XX) xxxxx-xxxx"
            />
          </div>
          <div className="form-group mt-3">
            <label>Endereço</label>
            <input
              type="adress"
              className="form-control mt-1"
              placeholder="R. Solimões da rocha 112"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Senha"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </div>
          <p className="text-center mt-2">
            Esqueçeu a <a href="#">senha?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
