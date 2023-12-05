import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePedido } from "../../context/PedidosContext";

export function Pedido(props, { key }) {
  const { deletePedido } = usePedido();

  return (
    <div className="border border-gray-400 p-1 rounded-lg " key={key}>
      <h1> Pedido N°{props.id}</h1>
      <p>Cliente: {props.cliente}</p>
      <button onClick={() => deletePedido(props.delId)}>Delete</button>
      <Link to={`/pedidos/${props.delId}`}>Edit</Link>
    </div>
  );
}

export default Pedido;
