import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3005/users", {
        name,
        phone,
        address,
        email,
        password,
      });

      // Mostra se usuario conseguiu realziar o cadastro ou deu algum erro
      console.log("Usuário criado com sucesso!");
      console.log(response.data);
      navigate("/login"); // Caso o usuário realize um cadastro correto será redirecionado para pagina de login
    } catch (error) {
      console.error(error); // Pode ser usuário já criado ou algum dado inserido de forma errada
      console.error("Erro ao criar usuario:", error);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registre-se</h3>
          <div className="text-center">
            Já possui conta?{" "}
            <Link to={"/login"}>
              <span className="link-primary">Entrar</span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Nome</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="Ahmad Kheder Mahfoud"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Telefone</label>
            <input
              type="phone"
              className="form-control mt-1"
              placeholder="(XX) xxxxx-xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Endereço</label>
            <input
              type="address"
              className="form-control mt-1"
              placeholder="R. Solimões da Rocha 112"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Cadastrar
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
