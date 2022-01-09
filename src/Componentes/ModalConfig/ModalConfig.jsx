import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../hooks/useUsuario";
import './ModalConfig.css';

export const ModalConfig = (props) => {

    const { usuario, pegarToken, usuarioImagem, excluirToken, setUsuario, getMe } = useUsuario();
    const [updateUsuarioNome, setUpdateUsuarioNome] = useState();
    const [updateUsuarioSobrenome, setUpdateUsuarioSobrenome] = useState(usuario && usuario.usuario.sobrenome);
    const [updateUsuarioNasc, setUpdateUsuarioNasc] = useState(usuario && usuario.usuario.data_nasc);
    const [updateUsuarioCidAtual, setUpdateUsuarioCidAtual] = useState(usuario && usuario.usuario.cidade_atual);
    const [updateUsuarioCidNasc, setUpdateUsuarioCidNasc] = useState(usuario && usuario.usuario.cidade_nasc);
    const [updateUsuarioEstCivil, setUpdateUsuarioEstCivil] = useState(usuario && usuario.usuario.estado_civil);
    const [updateUsuarioPerfil, setUpdateUsuarioPerfil] = useState(usuario && usuario.usuario.perfil);
    const { isOpen, onRequestClose } = props;

    const navigate = useNavigate();


    const logout = () => {
        excluirToken();
        setUsuario(null);
        navigate("/");
    };

    useEffect(() => {
        if (usuario) {
            setUpdateUsuarioNome(usuario.usuario.nome);
            setUpdateUsuarioSobrenome(usuario.usuario.sobrenome);
            setUpdateUsuarioCidAtual(usuario.usuario.cidade_atual);
            setUpdateUsuarioCidNasc(usuario.usuario.cidade_nasc);
            setUpdateUsuarioEstCivil(usuario.usuario.estado_civil);
            setUpdateUsuarioNasc(usuario.usuario.data_nasc);
            setUpdateUsuarioPerfil(usuario.usuario.perfil);
        }
        console.log(usuario)
    }, [usuario])

    const AtualizarUsuario = async () => {
        try {
            const user = usuario.usuario._id;
            const atualizarUsuario = await fetch("http://localhost:4322/api/user/atualizarUsuario", {
                method: "put",
                body: JSON.stringify({
                    _id: user,
                    nome: updateUsuarioNome,
                    sobrenome: updateUsuarioSobrenome,
                    email: usuario.email,
                    username: usuario.username,
                    cidade_nasc: updateUsuarioCidNasc,
                    cidade_atual: updateUsuarioCidAtual,
                    estado_civil: updateUsuarioEstCivil,
                    data_nasc: updateUsuarioNasc,
                    perfil: updateUsuarioPerfil,
                }),
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": pegarToken(),

                },
            });
            const dadosAtualizados = await atualizarUsuario.json();
            console.log(dadosAtualizados);
            getMe(pegarToken());
            onRequestClose();
        }
        catch (error) {
            console.log(error);
        }
    };


    const DesativarPerfil = async () => {
        try {
            console.log(usuario)
            const desativarPerfil = await fetch("http://localhost:4322/api/user/desativarPerfil", {
                method: "put",
                body: JSON.stringify({ _id: usuario._id, ativo: false }),
                header: {
                    "Content-Type": "application/json",
                    "x-access-token": pegarToken(),
                },
            });
            const perfilDesativado = await desativarPerfil.json();
            console.log(perfilDesativado);
            logout();
        }
        catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                className="exampleModalScrollable"
            >
                <div className="config-modal">
                    <div id="closeButton">
                        <img
                            src="images/icones/close-icon.svg"
                            alt="close-icon"
                            className="closeButton"
                            onClick={onRequestClose}
                        />
                    </div>
                    <div className="input-cadastrar">
                        <div>
                            <label for="nome" type="text"> Nome:</label>
                            <input
                                value={updateUsuarioNome}
                                onChange={(e) => setUpdateUsuarioNome(e.target.value)}
                                type="text"
                                for="nome"
                                id="nome"
                                className="input-config"
                            />
                        </div>
                        <div>
                            <label for="sobrenome" type="text">Sobrenome:</label>
                            <input
                                value={updateUsuarioSobrenome}
                                onChange={(e) => setUpdateUsuarioSobrenome(e.target.value)}
                                type="text"
                                for="sobrenome"
                                id="sobrenome"
                                className="input-config"
                            />
                        </div>
                    </div>
                    <div className="imagens">
                        <div className="alinhar-foto-capa">
                            <h5 className="h5-modal">Editar foto de perfil</h5>
                            <img src={usuarioImagem}
                                id="foto-usuario-card"
                            />
                            <div id="botoes-atualizar">
                                <button>Carregar foto</button>
                                <button>Deletar foto</button>
                            </div>
                        </div>
                    </div>
                    <div className="label-config">
                        <div>
                            <label for="residencia" type="text"><img src="home-icon.svg" alt="logo" className="icon-config" />Residência:</label>
                            <input
                                value={updateUsuarioCidAtual}
                                onChange={(e) => setUpdateUsuarioCidAtual(e.target.value)}
                                type="text"
                                for="residencia"
                                id="residencia"
                                className="input-config"
                            />
                        </div>
                        <div>
                            <label for="naturalidade" type="text"><img src="location.svg" alt="logo" className="icon-config" />Naturalidade:</label>
                            <input
                                value={updateUsuarioCidNasc}
                                onChange={(e) => setUpdateUsuarioCidNasc(e.target.value)}
                                type="text"
                                for="naturalidade"
                                id="naturalidade"
                                className="input-config"
                            />
                        </div>
                        <div>
                            <label for="estado-civil" type="text"><img src="heart.svg" alt="logo" className="icon-config" /> Estado civil:</label>
                            <input
                                value={updateUsuarioEstCivil}
                                onChange={(e) => setUpdateUsuarioEstCivil(e.target.value)}
                                type="text"
                                for="estado-civil"
                                id="estado-civil"
                                className="input-config"
                            />
                        </div>
                        <div>
                            <label for="data-nasc" type="text"><img src="birth.svg" alt="logo" className="icon-config" /> Nascimento:</label>
                            <input
                                value={updateUsuarioNasc}
                                onChange={(e) => setUpdateUsuarioNasc(e.target.value)}
                                type="text"
                                for="data-nasc"
                                id="data-nasc"
                                className="input-config"
                            />
                        </div>
                        <div className="perfil-sobre">
                            <label for="perfil" type="text"><img src="skull-icon.svg" alt="logo" className="icon-config" />Sobre mim:</label>
                            <textarea
                                value={updateUsuarioPerfil}
                                onChange={(e) => setUpdateUsuarioPerfil(e.target.value)}
                                type="text"
                                for="perfil"
                                id="perfil"
                                className="input-config"
                            />
                        </div>
                        <div class="modal-footer">
                            <button id="botao-salvar-config" onClick={() => AtualizarUsuario()}>Salvar Dados</button>
                            <button id="botao-desativar-config" onClick={() => DesativarPerfil()}>Desativar Perfil</button>
                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )


}