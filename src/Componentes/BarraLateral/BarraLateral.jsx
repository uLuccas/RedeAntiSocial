import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./BarraLateral.css";
import { ModalConfig } from "../ModalConfig/ModalConfig";
import { useUsuario } from "../../hooks/useUsuario";
import { Inimizades } from "../Inimizades/Inimizades";


export const BarraLateral = () => {

  const navigate = useNavigate();
  const { getMe, pegarToken, setShowInimizades, showInimizades } = useUsuario();
  const [modalConfigIsOpen, setIsOpenConfig] = useState();

  function openModalConfig() {
    setIsOpenConfig(true);
    ;
  }
  function closeModalConfig() {
    setIsOpenConfig(false);
  }

  return (
    <div className="menu-lateral">
      <div className="btns">
        <button className="btn-lateral" onClick={() => navigate('/meuPerfil')}>Meu Perfil</button>

        <button className="btn-lateral" onClick={() => { openModalConfig(); getMe(pegarToken()); }}>Configurações</button>
        <ModalConfig
          isOpen={modalConfigIsOpen}
          onRequestClose={closeModalConfig}
        />
        <button className="btn-lateral" onClick={() => setShowInimizades(true)}>Inimizades</button>
      </div>
      <div className="descricao">
        <p id="desc">"É melhor ser temido do que amado."</p>
        <p id="autor">Rede AntiSocial - Feita com muito ódio</p>
      </div>
    </div>
  );
};
