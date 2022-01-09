import React, { useState, useContext } from "react";
import "../Login/Login.css";
import logo from "./pg-inicial-logo.svg";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../hooks/useUsuario";

// import { useAuth } from "../../context/auth";

// {navigate('/home')
// islogged, setisLogged
export const Login = () => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const { usuario, setUsuario, guardarToken } = useUsuario();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const FazerLogin = async () => {
    const response = await fetch("http://localhost:4322/api/user/login", {
      method: "post",
      body: JSON.stringify({ user: login, senha: password }),
      headers: { "Content-type": "application/json" },
    }).catch((erro) => {
      console.log(erro);
    });
    const usuarioLogado = await response.json();
    console.log(usuarioLogado);

    if (usuarioLogado.accessToken) {
      guardarToken(usuarioLogado.accessToken);
      setUsuario(usuarioLogado);
      console.log(usuario);
      navigate("/");
    }
    if (usuarioLogado.status) {
      setStatus(usuarioLogado.status);
      console.log(usuario);
    }
  };

  return (
    <div className="Login">
      <div className="logo-pg-login">
        <img src={logo} alt="logo"></img>
      </div>
      <h1>Login</h1>
      <div className="login-name">
        <input
          id="email"
          type="email"
          onChange={(event) => setLogin(event.target.value)}
          placeholder="username ou e-mail"
        ></input>
      </div>
      <div className="login-password">
        <input
          id="pass"
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="senha"
        ></input>
      </div>
      <div className="mensagem">
        <a href="./trocarSenha" id="esqueci">
          *Esqueci minha senha
        </a>
      </div>
      <div className="mensagem">
        <p id="status" style={{ display: status ? "block" : "none" }}>
          {status}
        </p>
      </div>
      <div className="btn-login">
        <button
          onClick={() => {
            FazerLogin();
          }}
        >
          Entrar
        </button>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    </div>
  );
};
