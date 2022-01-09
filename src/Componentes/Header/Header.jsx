import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { Results } from "../Results/Results";
import { useUsuario } from "../../hooks/useUsuario";
import { useFeed } from "../../hooks/useFeed";
import "../Header/header.css";

// console.log(pesquisa);
// if (!pesquisa) {

// } else {

export const Header = () => {
  const navigate = useNavigate();
  const {
    setUsuario,
    usuarioImagem,
    setSearchUsuario,
    usuario,
    excluirToken,
    pegarToken
  } = useUsuario();
  const { setVoltar } = useFeed();
  const [palavra, setPalavra] = useState();

  const logout = () => {
    excluirToken();
    setUsuario(null);
    navigate("/");
  };

  const Pesquisar = async () => {
    if (palavra) {
      console.log(palavra);
      const pesquisa = await fetch("http://localhost:4322/api/user/usuario", {
        method: "post",
        body: JSON.stringify({ word: palavra }),
        headers: {
          "Content-type": "application/json",
          "x-access-token": pegarToken(),
        },
      });
      const response = await pesquisa.json();
      console.log(response);
      if (response.length) {
        setSearchUsuario(response);
      }
      if (response.erro && palavra) {
        const pesquisarUsers = await fetch(
          "http://localhost:4322/api/user/usuarios",
          {
            method: "get",
            headers: {
              "Content-type": "application/json",
              "x-access-token": pegarToken(),
            },
          }
        );
        console.log(pesquisarUsers);
        const responseUsers = await pesquisarUsers.json();
        console.log(responseUsers);
        setSearchUsuario(responseUsers);
      }
    }
  };

  useEffect(() => {
    Pesquisar();
  }, [palavra]);


  return (
    <header>
      <div className="header-logo">
        <img
          src="/pg-inicial-logo.svg"
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        ></img>
      </div>
      <div className="search-header">
        <input
          type="text"
          className="searchTxt"
          placeholder="Encontre um inimigo..."
          onChange={(e) => {
            setVoltar(false);
            setPalavra(e.target.value);
          }}
        ></input>
        <img class="search-icon" alt="search-icon" src="/search.svg" />
      </div>
      <div className="perfil">
        <img
          src={usuarioImagem}
          alt="perfil"
          onClick={() => {
            navigate("/meuPerfil");
          }}
        ></img>
        <h4>
          {usuario && usuario.usuario.nome + " " + usuario.usuario.sobrenome}
        </h4>
      </div>

      <div className="config-header">
        <button className="btn-sair" onClick={() => logout()}>
          Sair
        </button>


      </div>
    </header>
  );
};
