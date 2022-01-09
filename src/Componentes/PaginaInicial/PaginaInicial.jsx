import React from "react";
import "../PaginaInicial/PaginaInicial.css";
import logo from "./pg-inicial-logo.svg";
import { useNavigate } from "react-router-dom";

export const PaginaInicial = () => {

  const navigate = useNavigate();

  return (
    <main className="pg-inicial">
      <div className="pg-conteudo">
        <div className="logo-pg-inicial">
          <img src={logo} alt="logo"></img>
        </div>
        <h1 className="bounce">AntiSocial</h1>
        <div className="btn-pg-inicial">

          <button className="btnEntrar"
            onClick={() => navigate('/login')}>Entrar</button>

          <button className="btnCadastrar"
            onClick={() => navigate('/cadastrar')}>Cadastrar</button>
        </div>
        <p className="msg">Não seja bem-vindo</p>
      </div>
    </main>
  );
};
