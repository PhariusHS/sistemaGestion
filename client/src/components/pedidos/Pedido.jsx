import { useEffect } from "react";
import { Link } from "react-router-dom";
import { usePedido } from "../../context/PedidosContext";
import { HiDotsVertical } from "react-icons/hi";
import { HiXCircle } from "react-icons/hi";
import {useState} from 'react'

export function Pedido(props, { key }) {
  const { deletePedido } = usePedido();
  const [isopen, setIsopen] = useState(false)

  return (
    <div className="grid grid-cols-10 gap-4 border border-gray-400 p-1 rounded-lg">
      <div className="col-span-9">
        <h1>
          <strong>Pedido N°: </strong>{props.id}
        </h1>
        <p>
          <strong>Cliente: </strong>{props.cliente}
        </p>
      </div>
      <div className="col-span-1 flex justify-end">

{
    isopen ? (
                <div className='bg-white p-5 rounded flex justify-center items-center gap-3'>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white text-s font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => deletePedido(props.delId)}> 
                        Delete
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white text-s font-bold py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline">
                        <Link to={`/pedidos/${props.delId}`}>Edit </Link>
                    </button>
                    <button className= "text-xl" onClick={()=>setIsopen(false)}>
                      <HiXCircle />
                    </button>
                </div>
    ) : (
      <>
      <button className = "text-2xl" onClick={()=>setIsopen(true)}>
          <HiDotsVertical/>
        </button>
      </>
    )
}

      </div>
    </div>
  );
}

export default Pedido;
