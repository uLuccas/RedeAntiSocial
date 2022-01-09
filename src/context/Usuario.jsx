import React, { createContext, useState } from "react";
export const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  console.log(" DENTRO DO PROVIDER USUARIO ");
  const [isLoading, setIsLoading] = useState("false");
  const [usuario, setUsuario] = useState();
  const [searchUsuario, setSearchUsuario] = useState();
  const [image, setImage] = useState();
  const [showInimizades, setShowInimizades] = useState(false);
  // const [islogged, setisLogged] = useState(false);

  const pegarToken = () => {
    return localStorage.getItem("token");
  };

  const guardarToken = (token) => {
    return localStorage.setItem("token", token);
  };

  const excluirToken = () => {
    return localStorage.removeItem("token");
  };

  const logout = () => {
    excluirToken();
    setUsuario(null);
    window.location.href = '/';
  };

  const getMe = async (tokenUser) => {
    try {
      const response = await fetch("http://localhost:4322/api/user/me", {
        method: "get",
        headers: {
          "Content-type": "application/json",
          "x-access-token": tokenUser,
        },
      });
      const user = await response.json();
      console.log(user);
      if (user.message) {
        logout();
      }
      setUsuario(user);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    const tokenMe = pegarToken();
    if (!usuario && tokenMe) {
      getMe(tokenMe);
    }
  }, [usuario]);

  // const generateID = (id) => {
  //     const diff = 3 - usuarios.id.toString().length;
  //     let resp = id;
  //     let i = 0;
  //     while (i < diff) {
  //         resp = "0" + resp;
  //         i++;
  //     }
  //     return resp;


  const idUser = usuario && usuario.usuario.id
  const usuarioImagem = `/images/fotos-perfil/${idUser}.png`;

  return (
    <UsuarioContext.Provider
      value={{
        getMe,
        logout,
        usuario,
        setUsuario,
        searchUsuario,
        setSearchUsuario,
        pegarToken,
        guardarToken,
        excluirToken,
        image,
        setImage,
        usuarioImagem,
        isLoading,
        setIsLoading,
        showInimizades,
        setShowInimizades,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
