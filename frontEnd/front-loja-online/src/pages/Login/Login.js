import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3005/login", {
        email,
        password,
      });

      // Mostra se usuario se logou ou deu algum erro.
      console.log("Usuário logado com sucesso!");
      console.log(response.data);
      if (response.data == "Login success") {
        navigate("/products"); // Caso o usuário se logue será redirecionado para página de produtos
      }
    } catch (error) {
      console.error("Erro ao logar usuario:", error); // Pode ser senha errada ou usuário não criado
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleLogin}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <p className="text-center mt-2">
            Esqueceu a <a href="#">senha?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
