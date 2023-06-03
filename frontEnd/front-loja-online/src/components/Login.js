import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="text-center">
            Não possui conta?{" "}
            <Link to={"/register"}>
              <span className="link-primary">Registre-se</span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Digite o Email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Digite a senha"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Link to={"/products"}>
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </Link>
          </div>
          <p className="text-center mt-2">
            Esqueçeu a <a href="#">senha?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
