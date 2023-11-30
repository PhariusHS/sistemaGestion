import { useEffect } from "react";


function Pedido(props,{key}) {
 

  return (
    <div className="border border-gray-400 p-1 rounded-lg " key={key}>
      <h1> Pedido N°{props.id}</h1>
        <p>Cliente: {props.cliente}</p>
    </div>
  );
}

export default Pedido;
