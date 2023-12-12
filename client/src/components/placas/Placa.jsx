import React from "react";

function Placa(props, { key }) {
  return (
    <div className="border border-gray-400 p-1 rounded-lg flex flex-col " key={key}>
      <h1> Pedido asociado: </h1>
      <span>Color: {props.color}</span>
      <span>Ancho: {props.ancho}</span>
      <span>Largo: {props.largo}</span>
      <span>Alto: {props.alto}</span>
      <span>Densidad: {props.densidad}</span>
      <span>Masa: {props.masa}</span>
      <span>Estado: {props.estado}</span>
    </div>
  );
}

export default Placa;
