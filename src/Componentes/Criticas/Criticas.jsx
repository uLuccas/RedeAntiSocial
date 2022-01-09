import React, { useState, useRef, useEffect } from "react";
import "./Criticas.css";
import ModalComentario from "../Modal/ModalComentario";
import ShowComments from "./ShowComments";
import { useUsuario } from "../../hooks/useUsuario";

const Criticas = ({ item, atualizar, postID, verificarId }) => {
  const [ModalComentOpen, setComentIsOpen] = useState(false);
  const [position, setPosition] = useState({ content: { left: 0, top: 0 } });
  const [conteudo, setConteudo] = useState("");
  const [criticaID, setCriticaID] = useState();
  const [dislikeDado, setDislikeDado] = useState(true);
  const { usuario } = useUsuario();

  const inputCritica = useRef(null);

  async function openModal(evt) {
    await setPosition({ content: { left: evt.clientX, top: evt.clientY } });
    if (evt.target.id) {
      setCriticaID(evt.target.id);
    }
    await setComentIsOpen(true);
  }

  function closeModal() {
    setComentIsOpen(false);
  }

  const postarCritica = async () => {
    const enemy = usuario.usuario._id;
    const conteudo_critica = conteudo;
    const result = await fetch(
      "http://localhost:4322/api/criticas/postCritica",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: item._id,
          enemy: enemy,
          conteudo_critica: conteudo_critica,
        }),
      }
    );
    const response = await result.json();
    console.log(response);
    await atualizar();
    inputCritica.current.value = "";
  };

  function alteraState() {
    setDislikeDado(!dislikeDado);
    daDislike();
  }

  const daDislike = async () => {
    console.log(dislikeDado);
    if (dislikeDado) {
      const idDislike = usuario.usuario._id;
      console.log(idDislike)
      const result = await fetch(
        "http://localhost:4322/api/feed/updateDislike",
        {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _id: item._id, idDislike }),
        }
      );
      // console.log(result);
      atualizar();
      return result;
    }
  };

  const contCritica = () => {
    for (var x = 0; x <= item.critica.length; x++) {
      var cont = x;
    }
    return cont;
  };
  

  return (
    <div className="area">
      <h4>Criticas</h4>
      <div className="areaComents">
        <ShowComments verificarId={verificarId} item={item} openModal={openModal} />
      </div>
      <div className="form-criticas">
        <input
          ref={inputCritica}
          type="text"
          name="pesquisa"
          placeholder="Fazer critica..."
          onChange={(event) => setConteudo(event.target.value)}
        />
        <button
          onClick={() => {
            postarCritica();
          }}
        >
          Enviar
        </button>
      </div>
      <div className="cont">
        <p className="p-critica">{contCritica()} Criticas</p>
        <div className="dislike">
          <p>{item && item.dislike.length}</p>
          <img
            src="bomba-icone.svg"
            className="icone-bomba"
            alt="icone-bomba"
            onClick={alteraState}
          />
        </div>
      </div>
      {item && (
        <ModalComentario
          isOpen={ModalComentOpen}
          onRequestClose={closeModal}
          style={position}
          item={item}
          criticaID={criticaID}
          postID={item._id}
          atualizar={atualizar}
        />
      )}
    </div>
  );
};

export default Criticas;
