import React, { useState, useEffect } from "react";
import { BarraLateral } from "../BarraLateral/BarraLateral";
import Criticas from "../Criticas/Criticas";
import { Postar } from "../Postagem/Postar";
import Publi from "../Publi/Publi";
import { useFeed } from "../../hooks/useFeed";
import "../Feed/Feed.css";
import { useUsuario } from "../../hooks/useUsuario";

export const Feed = () => {
  const { feed, getPosts, setVoltar} = useFeed();
  const { usuario } = useUsuario();


  useEffect(() => {
    getPosts();
    setVoltar(true);

  }, [usuario]);

  return (
    <>
        <div className="feed">
        <div className="container-picuinha">
          <Postar />
            <Publi data={feed} atualizar={getPosts} />
            </div>
        </div>
    </>
  );
};
