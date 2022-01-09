import React from "react";
import "./DadosUsuario.css";

const DadosUsuario = () => {
  return (
    <div className="conteudo-dados">
      <div className="infogeral">
        <div></div>
        <div className="alinhar">
          <img src="" className="icone" />
         <p>De <b>Tatooine</b></p>
          {/* {item.cidadeNascimento} */}
        </div>

        <div className="alinhar">
          <img src="" className="icone" />
          Mora em <b>Estrela da Morte</b>
          {/* {item.reside} */}
        </div>
        <div className="alinhar">
          <img src="" className="icone" /> Divorciado
          {/* {item.estadosCivil} */}
        </div>

        <div className="alinhar">
          <img src="" className="icone" />
          <b> 42 Anos antes de uma batalha la</b>
          {/* {item.idade} */}
        </div>
      </div>

      <div className="sobre">
        <h4>Sobre mim</h4>
        <p>
          Saudações, bem, me chamo Darth Vader da Silva Skywalker. Sou pai de
          dois filhos, eu acho, e sou divorciado.Estou a procura de novas
          inimizades, preciso destilar meu ódio em outros planetas. Posso
          agregar nossa inimizade com bombas, armas capazes de aniquilar
          planetas e afins.Se vier com papo de força eu não respondo, odeio
          crentes.
          {/* {item.descricao} */}
        </p>
      </div>
    </div>
  );
};
export default DadosUsuario;
