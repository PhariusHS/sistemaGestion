import React from "react";
import {useState, useEffect} from 'react'
import ListaPedidos from "./pedidos/ListaPedidos";
import PedidosListos from "./pedidos/PedidosListos";
import PedidosPendientes from "./pedidos/PedidosPendientes";

function Pedido() {
  return (
    <div className="border border-gray-400 p-1 rounded-lg">
          <h1> Pedido N° ???</h1>
        </div>
  )
}

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

    <div className="bg-gray-100">
      <div className=" bg-white rounded-lg shadow-lg p-4">

        <h1 className="text-2xl font-bold mb-4 text-center">Listado pedidos</h1>

        <div className="grid grid-cols-3 gap-4 justify-center">

          <button className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Listos</button>
          <button className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Todos</button>
          <button className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Pendientes</button>
          
        </div>
        <div className = "max-w-full mx-auto bg-white rounded-lg shadow-lg  max-h-96 mt-10 mb-10 overflow-y-auto">
            <div className="max-w-full mx-auto bg-white border border-black p-5 rounded-lg max-h-fit items-center justify-center">
           
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
              <Pedido/>
            </div>
          </div>
          <div className=" grid justify-center">

            <button className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Agregar pedido</button>
          
          </div>
          
      </div>
    </div>

</>
  );
}

export default PedidosGrid;
