import React from "react";
import Modal from "react-modal";
import "./ModalConfigPost.css";

function ModalConfigPost(props) {
  const { mostraBtn, deletePost, closeModal } = props;
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        contentLabel="Example Modal"
        overlayClassName="modalFora"
        className="modalDentroConfig"
        style={props.style}
      >
        <p>
          <b>Configurações do Post</b>
        </p>
        <button className="alterar" onClick={()=> {mostraBtn(); closeModal()}}>
          Alterar Publicação
        </button><br/>
        <button className="delete" onClick={() => {deletePost()}}>
          Deletar Publicação
        </button>
      </Modal>
    </div>
  );
}

export default ModalConfigPost;
