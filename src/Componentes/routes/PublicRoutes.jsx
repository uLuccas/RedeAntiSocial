// import react from "react";
import { Route, Routes } from "react-router";
import { PageCadastro } from "../Pages/PageCadastro";
import PageInicial from "../Pages/PageInicial";
import PageLogin from "../Pages/PageLogin";
import PageSenha from "../Pages/PageSenha";
import NotFound from "../Pages/NotFound";
export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageInicial />} />
      <Route path="/login" element={<PageLogin />} />
      <Route path="/cadastrar" element={<PageCadastro />} />
      <Route path="/trocarsenha" element={<PageSenha />} />
      <Route path="/:notfound" element={<NotFound />} />
    </Routes>
  );
};
