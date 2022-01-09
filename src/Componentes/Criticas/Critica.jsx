import React, { useState, useEffect } from "react";
import { useUsuario } from "../../hooks/useUsuario";
import "./Criticas.css";

const Critica = ({ critica, openModal, verificarId, item }) => {
  const [criticaUsuario, setCriticaUsuario] = useState({});
  const { usuario } = useUsuario();

  const dataFormat = (data) => {
    const contahora = new Date();
    const result = new Date(data);
    const setHora = contahora.getTime() - result.getTime();

    if (setHora > 86400000) {
      const datapost = result.toLocaleDateString("pt-br");
      return datapost;
    } else {
      const timepost = result.toLocaleTimeString("pt-br");
      return timepost;
    }
  };

  useEffect(() => {
    const getUserName = async () => {
      const _id = critica.enemy;
      if (_id.length > 6) {
        const user = await verificarId(critica.enemy);
        setCriticaUsuario(user);
        console.log(user);
      }
    };

    getUserName();
  }, [usuario]);

  console.log(criticaUsuario)
  const idUserInimigo = criticaUsuario.id
  const usuarioImagemInimigo = `/images/fotos-perfil/${idUserInimigo}.png`;

  console.log(usuarioImagemInimigo)
  return (
    <div className="conteudo">
      <div className="headerComent">
        <div className="fteNome">
          <img
            src={usuarioImagemInimigo}
            className="icone-perfil"
            alt="darth-vader"
          />
          <h5>
            {criticaUsuario &&
              criticaUsuario.nome + " " + criticaUsuario.sobrenome}
          </h5>
        </div>
        <div className="btSettingsCritica">
          <h5>{dataFormat(critica.data_critica)}</h5>
          <img
            style={{
              display:
                item.id_usuario === usuario.usuario._id ||
                  item.critica.enemy === usuario.usuario._id
                  ? "block"
                  : "none",
            }}
            src="settings-icon.svg"
            className="icone-config"
            alt="icone-config"
            id={critica._id}
            onClick={openModal}
          />
        </div>
      </div>
      <div className="comentario">
        <textarea
          defaultValue={critica.conteudo_critica}
          disabled="false"
        ></textarea>
      </div>
    </div>
  );
};
export default Critica;
