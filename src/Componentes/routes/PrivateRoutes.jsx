import react from "react";
import { Route, Routes } from "react-router";
import PageHome from "../Pages/PageHome";
import NotFound from "../Pages/NotFound";
import { Header } from "../Header/Header";
import { BarraLateral } from "../BarraLateral/BarraLateral";
import FotoPerfil from "../FotoPerfil/FotoPerfil";

export const PrivateRoutes = () => {
  return (
    <div className="page-home">
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" exact element={<PageHome />} />
        <Route path="/meuPerfil" exact element={<FotoPerfil />} />
        <Route path="/:notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
};
