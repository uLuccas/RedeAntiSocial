import React from "react";

import "./Inimizades.css";
export const InimizadesResults = (props) => {
  const { inimizade } = props;

  return (
    <div className="resultado-inimizades">
      <div className="foto-inimigo">
        <img className="foto-inimigo-perfil" />
      </div>
      <div className="nome-inimigo">
        <h4>{inimizade && inimizade.nome + " " + inimizade.sobrenome}</h4>
        <p>{inimizade && "@" + inimizade.username}</p>
      </div>
      <div className="ftNome">
        <button className="button-desfazer">Desfazer amizade</button>
      </div>
    </div>
  );
};
