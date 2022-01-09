import React from "react";
import { Routes } from "./Componentes/routes/Routes";
import "./App.css";
// import { Route, Routes as Router } from "react-router";
// import PageInicial from "./Componentes/Pages/PageInicial";
// import PageLogin from "./Componentes/Pages/PageLogin";
// import { PageCadastro } from "./Componentes/Pages/PageCadastro";
// import PageSenha from "./Componentes/Pages/PageSenha";
// import PageHome from "./Componentes/Pages/PageHome";
// import PagePerfil from "./Componentes/Pages/PagePerfil";
// import PagePerfilInimigo from "./Componentes/Pages/PagePerfilInimigo";
// import { ThemeProvider } from "styled-components";
// import { darkTheme, tcholaTheme } from "./themes";
// import GlobalTheme from "./globals";
// import { useUsuario } from "./hooks/useUsuario";
// import { PaginaInicial } from "./Componentes/PaginaInicial/PaginaInicial";
// import NotFound from "./Componentes/Pages/NotFound";

const App = () => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
