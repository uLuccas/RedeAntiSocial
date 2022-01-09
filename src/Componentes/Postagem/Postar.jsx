import Postagem from "./Postagem";
import React, { useState } from "react";
import "../Postagem/Postagem.css";

export const Postar = (props) => {
  const [postIsOpen, setPostIsOpen] = useState(false);

  function abrirPost() {
    setPostIsOpen(true);
  }

  function fecharPost() {
    setPostIsOpen(false);
  }
  return (
    <>
      <div className="picuinha">
        {/* <button >Criar picuinha...</button> */}
        <img onClick={abrirPost} src="icone-mais.svg" alt="logo-mais" />
      </div>
      <Postagem isOpen={postIsOpen} onRequestClose={fecharPost} />
    </>
  );
};
