import React, { useEffect, useState } from "react";
import { useUsuario } from "../../hooks/useUsuario";
import { InimizadesResults } from "../Inimizades/InimizadesResults";
import "./Inimizades.css";


export const Inimizades = () => {
    const { usuario, pegarToken, setShowInimizades } = useUsuario();
    const [searchInimizades, setSearchInimizades] = useState([]);

    useEffect(() => {
        const init = async () => {
            console.log(usuario.usuario._id);
            try {
                const response = await fetch(`http://localhost:4322/api/user/inimizades/${usuario.usuario._id}`, {
                    method: "get",
                    headers: {
                        "Content-type": "application/json",
                        "x-access-token": pegarToken(),
                    },
                });
                const inimizadesList = await response.json();
                console.log(inimizadesList);
                setSearchInimizades(inimizadesList);
                test = inimizadesList;
            } catch (error) {
                console.log(error);
            }
        }
        init();
    }, [])


    return (
        <div className="areaSolici">
            <h3>Inimizades: </h3>
            <button className="btn-sair" onClick={() => setShowInimizades(false)}>
                Voltar
            </button>
            <div className="conteudo-resultado">
                {searchInimizades && searchInimizades.inimizades && searchInimizades.inimizades.map(inimizade => {
                    return <InimizadesResults inimizade={inimizade} />
                })}
            </div>
        </div>
    );
};
