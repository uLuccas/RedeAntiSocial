import React, { useState } from "react";
import "./publi.css";
import ModalConfigPost from "../Modal/ModalConfigPost";
import PubliCard from "./PubliCard";
import Criticas from "../Criticas/Criticas";
import { useFeed } from "../../hooks/useFeed";
import { useEffect } from "react/cjs/react.development";
import { useUsuario } from "../../hooks/useUsuario";

const Publi = (props) => {
  const { data, atualizar } = props;
  const [modalIsOpen, setIsOpen] = useState({ postID: "", open: false });
  const [position, setPosition] = useState({ content: { left: 0, top: 0 } });
  const [editPub, setEditPub] = useState(false);
  const [idpost, setIdpost] = useState("");
  const { pegarToken } = useUsuario();

  const verificarId = async (id) => {
    const buscar = await fetch(
      `http://localhost:4322/api/user/usuarioId/${id}`,
      {
        method: "get",
        headers: {
          "Content-type": "application/json",
          "x-access-token": pegarToken(),
        },
      }
    );
    const response = await buscar.json();
    console.log(response);
    return response;
  };

  function mostraBtn() {
    setEditPub(true);
    console.log(editPub);
  }

  function openModal(evt) {
    setPosition({ content: { left: evt.clientX, top: evt.clientY } });
    setIsOpen({ postID: evt.target.id, open: true });
    setIdpost(evt.target.id);
    console.log(modalIsOpen.postID);
  }

  function closeModal() {
    setIsOpen({ ...modalIsOpen, postID: idpost, open: false });
  }

  const deletePost = async () => {
    const response = await fetch("http://localhost:4322/api/feed/deletePost", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: modalIsOpen.postID }),
    });
    console.log(response);
    await atualizar();
    closeModal();
  };

  // const pegaUsuario = async () => {
  //   let id = item.id_usuario
  //   const pegou = await fetch("http://localhost:4322/api/user/pegaUm", {
  //     method: "post",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ _id : id})
  //   })
  //   console.log(pegou);
  //   await atualizar();
  // }

  return (
    <>
      {data &&
        data.map((item) => (
          <div className="publi-conteudo">
            <PubliCard
              verificarId={verificarId}
              key={item._id}
              item={item}
              openModal={openModal}
              editPub={editPub}
              setEditPub={setEditPub}
              postID={modalIsOpen.postID}
              atualizar={atualizar}
            />
            <Criticas
              verificarId={verificarId}
              item={item}
              key={`criticas-${item._id}`}
              atualizar={atualizar}
            />
          </div>
        ))}
      <ModalConfigPost
        isOpen={modalIsOpen.open}
        onRequestClose={closeModal}
        style={position}
        mostraBtn={mostraBtn}
        deletePost={deletePost}
        closeModal={closeModal}
      />
    </>
  );
};

export default Publi;
