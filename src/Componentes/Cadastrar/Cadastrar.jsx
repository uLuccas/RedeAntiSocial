import React, { useState } from "react";
import "./Cadastrar.css";
import img from "./arrow.svg";
import { useNavigate } from "react-router-dom";
import logo from "./pg-inicial-logo.svg";

export const Cadastrar = () => {
  const navigate = useNavigate();
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [resposta, setResposta] = useState();
  const FazerCadastro = async () => {
    const response = await fetch("http://localhost:4322/api/user/cadastrar", {
      method: "post",
      body: JSON.stringify({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        username: username,
        senha: senha,
      }),
      headers: { "Content-type": "application/json" },
    }).catch((erro) => console.log(erro));
    console.log(response);
    const res = await response.json();
    if (res.erro) {
      console.log(res.erro);
      return setResposta(res.erro);
    }
    if (res.user) {
      console.log(res.user);
      setResposta(`Usuario "${res.user.username}" cadastrado com sucesso!`);

      setTimeout(() => {
        return navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="cadastro-form">
      <div className="logo-pg-cadastro">
        <img src={logo} alt="logo"></img>
      </div>
      <h1>Cadastrar</h1>
      <div className="cadastro">
        <input
          onChange={(event) => {
            setNome(event.target.value);
          }}
          className="input-cadastro"
          type="text"
          placeholder="nome"
        ></input>
        <input
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          className="input-cadastro"
          type="text"
          placeholder="sobrenome"
        ></input>
      </div>
      <div className="cadastro">
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          className="input-cadastro"
          type="text"
          placeholder="username"
        ></input>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className="input-cadastro"
          type="email"
          placeholder="e-mail"
        ></input>
      </div>
      <div className="cadastro">
        <input
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          className="input-cadastro pass-cadastro"
          type="password"
          placeholder="password"
        ></input>
        {/* <label for="imagem">
            escolha sua foto de perfil <img src={img} alt="img-logo"></img>
          </label>
          <input
            type="file"
            id="imagem"
            style={{ display: "none" }}
            placeholder="password"
  ></input>*/}
      </div>
      <div className="mensagem">
        <p id="erro" style={{ display: resposta ? "block" : "none" }}>
          {resposta}
        </p>
      </div>
      <div className="btn-cadastrar">
        <button className="login" onClick={() => FazerCadastro()}>
          Enviar
        </button>
        <button className="login" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    </div>
  );
};
