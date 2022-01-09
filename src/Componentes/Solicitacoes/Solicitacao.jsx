import React from "react";
import "./Solicitacao.css";

const Solicitacoes = () => {
  return (
    <div className="all">
      {/* {solicitacoes.map */}
      <div className="areaSolici">
        <h3>Solicitacoes Recebidas</h3>
        <div className="conteudo">
          <div className="ftNome">
            <div className="foto">
              <img className="fotoPerfil" />
            </div>
            <p>Nome do Usuario</p>
          </div>

          <div className="ftNome">
            <button className="btAceitar">Aceitar</button>
            <button className="btRejeitar">Rejeitar</button>
          </div>
        </div>
        {/* } */}
      </div>
    </div>
  );
};

export default Solicitacoes;
