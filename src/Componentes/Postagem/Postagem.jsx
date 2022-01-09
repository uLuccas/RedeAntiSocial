import React from "react";
import "./Postagem.css";
import Modal from "react-modal";
import { useUsuario } from "../../hooks/useUsuario";
import { useFeed } from "../../hooks/useFeed";

const Postagem = (props) => {
  const { usuario } = useUsuario();
  const { getPosts } = useFeed();

  const FazerPost = async () => {
    const id_usuario = usuario.usuario._id;
    const picuinha = document.getElementById("picuinha").value;
    if (picuinha) {
      const obj = { id_usuario: id_usuario, picuinha };
      const fpost = await fetch("http://localhost:4322/api/feed/post", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      let resp = await fpost.json();
      if (resp) {
        getPosts();
      }
      props.onRequestClose();
    } else {
      alert("Não é possível fazer um post vazio!");
    }
  };

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        className="Modal"
        overlayClassName="modalForaPost"
      >
        <div className="tudo">
          <div className="post">
            {/* {item.fotoperfil} */}
            <div className="header">
              <div className="foto">
                <img
                  src="darth-vader.jpg"
                  alt="foto perfil"
                  className="fotoPerfil"
                  value="2"
                />
              </div>
              <div className="fundoUsuario">
                <p id="idUsuario" value="10">
                  {usuario &&
                    usuario.usuario.nome + " " + usuario.usuario.sobrenome}
                </p>
              </div>
            </div>
            <div className="foto">
              <img
                src="desgraça.svg"
                className="fotoPerfil"
                alt="foto perfil"
                onClick={props.onRequestClose}
              />
            </div>
            <div className="textArea">
              <textarea
                className="textArea"
                placeholder="Solta a afinetada aqui..."
                id="picuinha"
              ></textarea>
            </div>
            <div className="botoes">
              <button className="uploadImg">Anexo</button>
              <button className="publicar" onClick={FazerPost}>
                Publicar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Postagem;
