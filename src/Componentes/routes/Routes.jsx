// import react from "react";
import { useUsuario } from "../../hooks/useUsuario";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const Routes = () =>{
  const {pegarToken} = useUsuario();
  return pegarToken()? <PrivateRoutes/> :<PublicRoutes/>
}