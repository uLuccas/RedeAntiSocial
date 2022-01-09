import React from 'react';
import { useUsuario } from "../../hooks/useUsuario";
import "./BarraUsuario.css";

export const BarraUsuario = () => {
    const { usuario } = useUsuario();


    return (
        <div className="menu-dados">
            <h3>Meus dados</h3>
            <div className="perf">
                <img src="home-icon.svg" className="icone" />
                <p>De <b>{usuario && usuario.usuario.cidade_nasc}</b></p>
            </div>

            <div className="perf">
                <img src="location.svg" className="icone" />
                <p>Mora em <b>{usuario && usuario.usuario.cidade_atual}</b></p>
            </div>
            <div className="perf">

                <img src="heart.svg" className="icone" />
                <p>{usuario && usuario.usuario.estado_civil}</p>
            </div>

            <div className="perf">
                <img src="birth.svg" className="icone" />
                <p><b> {usuario && usuario.usuario.data_nasc}</b></p>
            </div>

            <div className="perf">
                <img src="skull-icon.svg" className="icone" />
                <p><b>Sobre mim</b></p>
                <p className="sobre-mim-dados">{usuario && usuario.usuario.perfil}</p>
            </div>
        </div>
    )
}