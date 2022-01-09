import React from "react";
import { useParams } from "react-router";

function NotFound() {
  const { notfound } = useParams();
  //   console.log(notfound);
  return (
    <>
      <p style={{ position: "fixed" }}>Pagina {notfound} nao encontrada </p>
    </>
  );
}

export default NotFound;
