import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePedido } from "../../context/PedidosContext";

export function Pedido(props, { key }) {
  const { deletePedido } = usePedido();

  return (
    <div className="border border-gray-400 p-1 rounded-lg" key={key}>
      <h1> <strong>Pedido N°: </strong>{props.id}</h1>
      <p> <strong>Cliente: </strong>{props.cliente}</p>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => deletePedido(props.delId)}> 
      Delete
      </button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline">
        <Link to={`/pedidos/${props.delId}`}>Edit
        </Link>
      </button>
  </div>
  
  );
}

export default Pedido;
