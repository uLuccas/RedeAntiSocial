import React, { useState, useEffect } from "react";
import { useFeed } from "../../hooks/useFeed";
import { useUsuario } from "../../hooks/useUsuario";

const PubliCard = (props) => {
  const { item, openModal, postID, editPub, setEditPub, verificarId } = props;
  const [picuinha, setPicuinha] = useState(item.picuinha);
  const [postUsuario, setPostUsuario] = useState({});
  const { usuario } = useUsuario();

  const updatePost = async () => {
    const response = await fetch("http://localhost:4322/api/feed/alteraPost", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: postID, picuinha: picuinha }),
    });
    console.log(response);
    setEditPub(false);
  };

  const closeAction = () => {
    setEditPub(false);
  };

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

  // const mostraIcone = () => {
  //   if (usuario.usuario._id == item.id_usuario) {
  //     setIconConfig(true);
  //   }
  // };

  useEffect(() => {
    const getUserName = async () => {
      const user = await verificarId(item.id_usuario);
      setPostUsuario(user);
    };

    getUserName();
  }, [usuario]);
  console.log(item)

  const idUserInimigo = item.id_usuario
  const usuarioImagemInimigo = `/images/fotos-inimigos/${idUserInimigo}.png`;


  return (
    <div>
      <div id="publi-card">
        <div className="head">
          <img id="foto-usuario" src={usuarioImagemInimigo}></img>
          <h3 className="nome-usuario">
            {postUsuario.nome + " " + postUsuario.sobrenome}
          </h3>
          <p id="data-postagem">{dataFormat(item.data_post)}</p>
            <img style={{ display: item.id_usuario === usuario.usuario._id ? "block" : "none" }}
              id={item._id}
              src="/configuracoes.svg"
              alt="settings-icon"
              className="settings-icon"
              onClick={openModal}
            />

        </div>
        <div className="publi">
          <textarea
            className="picuinha-publi"
            onChange={(e) => setPicuinha(e.target.value)}
            value={picuinha}
            id={item._id}
            disabled={editPub ? false : true}
          >
            {picuinha}
          </textarea>
        </div>
        {editPub && postID === item._id ? (
          <div className="divBtn">
            <button onClick={() => updatePost()}>Ok</button>
            <button onClick={() => closeAction()}>Cancelar</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PubliCard;
