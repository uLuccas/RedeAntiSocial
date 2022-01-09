import React from "react";
import "./Criticas.css";
import Critica from "../Criticas/Critica";

const ShowComments = ({ item, openModal, verificarId }) => {

  return (
    <>
      {item &&
        item.critica.map((critica) => (
          <Critica verificarId={verificarId} critica={critica} openModal={openModal} item={item} key={critica._id}/>
        ))}
    </>
  );
};

export default ShowComments;
