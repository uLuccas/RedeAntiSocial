import React from "react";
import Modal from "react-modal";
import "./ModalComentario.css";

function ModalComentario(props) {
  const { criticaID, postID, atualizar } = props;

  const deleteCritica = async () => {
    console.log(criticaID);
    if (criticaID) {
      const result = await fetch(
        "http://localhost:4322/api/criticas/deleteCritica",
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _idPost: postID,
            _idCritica: criticaID,
          }),
        }
      );
      // console.log(result);
      await atualizar();
      props.onRequestClose();
    }
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        contentLabel="Example Modal"
        overlayClassName="modalForaComentario"
        className="modalDentro"
        style={props.style}
      >
        <p>
          <b>Excluir Critica ?</b>
        </p>

        <div className="btnYesNo">
          <button className="sim" onClick={deleteCritica}>
            Sim
          </button>
          <button className="nao" onClick={props.onRequestClose}>
            Nao
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalComentario;
