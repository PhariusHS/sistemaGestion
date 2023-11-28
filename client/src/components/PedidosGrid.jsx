import React from "react";
import {useState, useEffect} from 'react'
import ListaPedidos from "./pedidos/ListaPedidos";
import PedidosListos from "./pedidos/PedidosListos";
import PedidosPendientes from "./pedidos/PedidosPendientes";

function PedidosGrid() {


    const listaPedidos = <ListaPedidos/>
    const pedidosListos = <PedidosListos/>
    const pedidosPendientes = <PedidosPendientes/>

    const [componente, setComponente] = useState(1)

    const handleButtons = (n) =>{

        setComponente(n)
    }
  return (
<>

<button onClick={()=>handleButtons(2)}>Pedidos listos</button>
<button onClick={()=>handleButtons(3)}>Pedidos pendientes</button>

{componente === 1 && listaPedidos}
{componente === 2 && pedidosListos}
{componente === 3 && pedidosPendientes}


</>
  );
}

export default PedidosGrid;
