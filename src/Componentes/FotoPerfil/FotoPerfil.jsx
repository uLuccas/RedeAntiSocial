import "./fotoPerfil.css";
import { Feed } from "../Feed/Feed";
import { useParams } from "react-router-dom";
import { useUsuario } from "../../hooks/useUsuario";
import DadosUsuario from "../DadosUsuario/DadosUsuario";

const FotoPerfil = ({ match }) => {
  const { usuario, usuarioImagem, usuarioCapa } = useUsuario();
  // const { id } = useParams();

  return (
    <>
      <div id="div-capa">
        <img src={usuarioCapa} className="foto-capa" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          position: "relative",
          float: "left",
          top: "-10em",
          left: "3em",
        }}
      >
        <div
          id="div-perfil"
          style={{ backgroundImage: `url(${usuarioImagem})` }}
        ></div>
        <div>
          <p>SUA BARRA DE PERFIL AQUI 👇</p>
        </div>
      </div>
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
          paddingLeft: 50,
        }}
      >
        <h2 className="nomeUsuario">{usuario && usuario.usuario.nome}</h2>
        <div className="feed-perfil">
          <Feed />
        </div>
      </div>
    </>
  );
};

export default FotoPerfil;
