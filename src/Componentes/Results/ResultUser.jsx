import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useUsuario } from "../../hooks/useUsuario";
import "./results.css";
export const ResultUser = (props) => {
  const { item, usuario } = props;
  const { pegarToken, getMe } = useUsuario();
  const [resposta, setResposta] = useState("add");
  // console.log(usuario);

  // useState(() => {
  //   console.log(" DENTRO DO STATE");
  //   console.log(usuario);
  //   // setUser(usuario);
  // }, [usuario]);
  // useEffect(() => {
  //   verificarInimigos(item._id);
  // }, [usuario]);

  // console.log(usuario.usuario.inimizade);

  const verificar = (usuario, idDoInimigo) => {
    const { inimizade, sol_enviadas, _id } = usuario;
    const ehInimigo = inimizade.find((obj) => {
      return obj === idDoInimigo;
    });
    if (ehInimigo) {
      return "inimigo";
    }
    const talvezInimigo = sol_enviadas.find((obj) => {
      return obj === idDoInimigo;
    });
    if (talvezInimigo) {
      return "solicitada";
    }
    if (usuario._id === idDoInimigo) {
      return "me";
    }

    return "add";
  };
  useEffect(() => {
    const inimigos = usuario.usuario;
    setResposta(verificar(inimigos, item._id));
  }, [usuario]);

  // const solicitacoes = usuario.usuario.sol_enviadas;
  // verificar(solicitacoes, item._id, "solicitada");

  // const inimigos = usuario.usuario.inimizade;
  // const resposta = inimigos.find((inimigo) => {
  //   if (inimigo == item._id) {
  //     return true;
  //   }
  // });

  const desfazerInimizade = async () => {
    const desfazer = await fetch(
      "http://localhost:4322/api/user/deletarInimizade",
      {
        method: "delete",
        body: JSON.stringify({
          _idlogado: usuario.usuario._id,
          _idinimigo: item._id,
        }),
        headers: {
          "Content-type": "application/json",
          "x-access-token": pegarToken(),
        },
      }
    );
    const response = await desfazer.json();
    console.log(response);
    getMe(pegarToken());
    return;
  };

  const solicitarInimizade = async () => {
    const enviar = await fetch(
      "http://localhost:4322/api/user/enviarSolicitacao",
      {
        method: "post",
        body: JSON.stringify({
          _idlogado: usuario.usuario._id,
          _idinimigo: item._id,
        }),
        headers: {
          "Content-type": "application/json",
          "x-access-token": pegarToken(),
        },
      }
    );
    const response = await enviar.json();
    console.log(response);
    getMe(pegarToken());
    return;
  };
  const cancelarSolicitacao = async () => {
    const cancelar = await fetch(
      "http://localhost:4322/api/user/deletarSolicitacao",
      {
        method: "delete",
        body: JSON.stringify({
          _idlogado: usuario.usuario._id,
          _idinimigo: item._id,
        }),
        headers: {
          "Content-type": "application/json",
          "x-access-token": pegarToken(),
        },
      }
    );
    const response = await cancelar.json();
    console.log(response);
    getMe(pegarToken());
    return;
  };
  const botao = {
    inimigo: (
      <button
        className="btDesfazer"
        onClick={() => {
          desfazerInimizade();
        }}
      >
        Desfazer Inimizade
      </button>
    ),
    solicitada: (
      <button
        className="btDesfazer"
        onClick={() => {
          cancelarSolicitacao();
        }}
      >
        Cancelar Solicitacao
      </button>
    ),
    add: (
      <button
        className="btAceitar"
        onClick={() => {
          solicitarInimizade();
        }}
      >
        Adicionar
      </button>
    ),
    me: (
      <button
        className="btDesfazer"
        // onClick={() => {
        //   meuPerfil();
        // }}
      >
        Meu Perfil
      </button>
    ),
  };
  return (
    <div className="conteudo-result">
      <div className="nome-usuario">
        <h4>{item && item.nome + " " + item.sobrenome}</h4>
        <p>{item && "@" + item.username}</p>
      </div>
      <div className="ftNome">
        {/* {usuario && resposta === " inimigo" && (
          <button className="btDesfazer" onClick={() => desfazerInimizade()}>
            Desfazer Inimizade
          </button>
        )}
        {usuario && resposta === "solicitada" && (
          <button className="btDesfazer" onClick={() => cancelarSolicitacao()}>
            Cancelar Solicitacao
          </button>
        )}
        {usuario && !resposta && (
          <button className="btAceitar" onClick={() => solicitarInimizade()}>
            Adicionar
          </button>
        )} */}
        {usuario && botao[resposta]}
      </div>
    </div>
  );
};
