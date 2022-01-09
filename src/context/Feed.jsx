import React, { createContext, useState } from "react";
import { useUsuario } from "../hooks/useUsuario";

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [feed, setFeedGeral] = useState();
  const { usuario } = useUsuario();
  const [voltar, setVoltar] = useState();

  const getPosts = async () => {
    const mapPosts = async (array, index, arrayRetorno) => {
      if (index === array.length) {
        const teste = arrayRetorno.filter(
          (value, index, array) =>
            array.findIndex((t) => t._id === value._id) === index
        );

        // return arrayRetorno;
        return teste;
      }
      const buscar = await fetch(
        `http://localhost:4322/api/feed/${array[index]}`,
        {
          method: "get",
          headers: { "Content-type": "application/json" },
        }
      );
      const response = await buscar.json();
      arrayRetorno = arrayRetorno.concat(response);
      return mapPosts(array, index + 1, arrayRetorno);
    };
    if (usuario) {
      console.log(usuario);
      let arrayIni = [];
      let idUser = usuario.usuario._id;
      let inimizades = usuario.usuario.inimizade;
      arrayIni.push(idUser);
      arrayIni.push(...inimizades);
      console.log(arrayIni);
      if (arrayIni.length) {
        console.log(usuario);
        let inimigos = await mapPosts(arrayIni, 0, []);
        console.log(inimigos);
        setFeedGeral(inimigos);
      }
    }
  };

  return (
    <FeedContext.Provider
      value={{
        feed,
        setFeedGeral,
        getPosts,
        voltar, setVoltar
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};
