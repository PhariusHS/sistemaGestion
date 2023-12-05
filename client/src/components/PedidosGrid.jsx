import React from "react";
import { useState, useEffect } from "react";
import ListaPedidos from "./pedidos/ListaPedidos";
import PedidosListos from "./pedidos/PedidosListos";
import PedidosPendientes from "./pedidos/PedidosPendientes";
import PedidosForm from "../components/PedidosForm";
import Pedido from "./pedidos/Pedido";
import { usePedido } from "../context/PedidosContext";

function PedidosGrid() {
  const { getPedidos, pedidos } = usePedido();
  const listaPedidos = <ListaPedidos />;
  const pedidosListos = <PedidosListos />;
  const pedidosPendientes = <PedidosPendientes />;
  const [componente, setComponente] = useState(1);

  const handleButtons = (n) => {
    setComponente(n);
  };

  useEffect(() => {
    getPedidos();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className=" bg-white rounded-lg shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            {componente === 1 && listaPedidos}
            {componente === 2 && pedidosListos}
            {componente === 3 && pedidosPendientes}
          </h1>

          <div className="grid grid-cols-3 gap-4 justify-center">
            <button
              onClick={() => handleButtons(3)}
              className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
              type="button"
            >
              Pendientes
            </button>
            <button
              onClick={() => handleButtons(1)}
              className="whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Todos
            </button>
            <button
              onClick={() => handleButtons(2)}
              className="whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Listos
            </button>
          </div>

          <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg  max-h-96 mt-10 mb-10 overflow-y-auto">
            <div className="max-w-full mx-auto bg-white border border-black p-5 rounded-lg max-h-fit items-center justify-center">
              {componente === 1 &&
                pedidos.map((pedido) => (
                  <Pedido
                    key={pedido._id}
                    id={pedidos.indexOf(pedido)}
                    cliente={pedido.cliente}
                    delId={pedido._id}
                  />
                ))}

              {componente === 2 &&
                pedidos.map((pedido) => {
                  if (pedido.terminado) {
                    return (
                      <Pedido
                        key={pedido._id}
                        id={pedidos.indexOf(pedido)}
                        cliente={pedido.cliente}
                        delId={pedido._id}
                      />
                    );
                  }
                })}
              {componente === 3 &&
                pedidos.map((pedido) => {
                  if (!pedido.terminado) {
                    return (
                      <Pedido
                        key={pedido._id}
                        id={pedidos.indexOf(pedido)}
                        cliente={pedido.cliente}
                        delId={pedido._id}
                      />
                    );
                  }
                })}
            </div>
          </div>
          <div className=" flex flex-row gap-5 justify-center">
            <PedidosForm />
            <form className=" flex flex-row gap-5 justify-center">
              <button type="submit">R</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PedidosGrid;
