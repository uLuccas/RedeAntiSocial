import { useContext } from "react";
import { UsuarioContext } from "../context/Usuario";

export const useUsuario = () => {
    return useContext(UsuarioContext);
};
