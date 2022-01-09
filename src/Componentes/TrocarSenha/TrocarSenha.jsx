import React, { useState } from "react";
import "./TrocarSenha.css";
import logo from "./pg-inicial-logo.svg";
import { useNavigate } from "react-router";

export const TrocarSenha = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [resposta, setResposta] = useState("");

  const mudarSenha = async () => {
    const response = await fetch("http://localhost:4322/api/user/trocarSenha", {
      method: "put",
      body: JSON.stringify({
        username: username,
        email: email,
        senha: senha,
      }),
      headers: { "Content-type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
    console.log(response);
    const res = await response.json();
    console.log(res);
    if (res.erro) {
      console.log(res.erro);
      return setResposta(res.erro);
    }
    if (res.status) {
      console.log(res.status);
      setResposta(res.status);
    }
    setTimeout(() => {
      return navigate("/login");
    }, 4000);
  };

  return (
    <div className="TrocarSenha">
      <div className="logo-pg-trocar">
        <img src={logo} alt="logo"></img>
      </div>
      <h1>Trocar senha</h1>
      <div className="senha-e-mail">
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          id="email-trocar"
          type="e-mail"
          placeholder="e-mail"
        ></input>
      </div>
      <div className="senha-name">
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          id="username-trocar"
          type="text"
          placeholder="username"
        ></input>
      </div>
      <div className="senha-password">
        <input
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          id="pass-trocar"
          type="password"
          placeholder="nova senha"
        ></input>
      </div>
      <div className="mensagem">
        <p id="erro" style={{ display: resposta ? "block" : "none" }}>
          {resposta}
        </p>
      </div>
      <div className="button-senha">
        <button onClick={() => mudarSenha()} className="btn-senha">
          Salvar
        </button>
      </div>
    </div>
  );
};
