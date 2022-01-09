import React, { useEffect } from "react";
import { Header } from "../Header/Header";
import { Feed } from "../Feed/Feed";
import { useFeed } from "../../hooks/useFeed";
import { Results } from "../Results/Results";
import { BarraLateral } from "../BarraLateral/BarraLateral";
import "./PageHome.css";
import { useUsuario } from "../../hooks/useUsuario";
import { BarraUsuario } from "../BarraUsuario/BarraUsuario";
import { Inimizades } from "../Inimizades/Inimizades";

const PageHome = () => {
  const { setFeedGeral } = useFeed();
  const { searchUsuario, usuario, showInimizades } = useUsuario();
  const { voltar, setVoltar } = useFeed();
  return (
    <div className="content-home" style={{ display: "flex" }}>
      <BarraLateral />
      <div className="separador"></div>
      <div className="elemento">{(searchUsuario && !voltar) ? <Results /> : showInimizades ? <Inimizades /> : <Feed />}</div>
      <div className="separador"></div>
      <BarraUsuario />
    </div>
  );
};

export default PageHome;
