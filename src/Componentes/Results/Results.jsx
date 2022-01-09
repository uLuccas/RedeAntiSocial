import React, { useEffect } from "react";
import { useUsuario } from "../../hooks/useUsuario";
import "./results.css";
import { ResultUser } from "./ResultUser";
import { useNavigate } from "react-router";
import { useFeed } from "../../hooks/useFeed";
export const Results = () => {
  const { searchUsuario, usuario } = useUsuario();
  const { setVoltar } = useFeed();
  return (
    <div className="areaSolici">
      <div className="config-header" style={{ display: "flex", width: "100%" }}>
        <h3>Resultados encontrados: </h3>
        <button className="btn-sair" onClick={() => setVoltar(true)}>
          Voltar
        </button>
      </div>
      <div className="conteudo-resultado">
        {searchUsuario &&
          searchUsuario.map((user, index) => (
            <ResultUser key={user._id} usuario={usuario} item={user} />
          ))}
      </div>
    </div>
  );
};
