import React from "react";
import "./Solicitacao.css";

const SolicitacoesEnviadas = () => {
  return (
    <div className="all">
      <div className="areaSolicitacoes">
        <h3>Solicitacoes Enviadas</h3>
        <div className="conteudo">
          <div className="ftNome">
            <div className="foto">
              <img className="fotoPerfil" />
            </div>
            <p>Nome do Usuario</p>
          </div>

          <div className="ftNome">
            <button className="btRejeitar">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitacoesEnviadas;
