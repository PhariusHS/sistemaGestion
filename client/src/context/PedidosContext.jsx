import { createContext, useContext, useState } from "react";
import {
  createPedidosRequest,
  getPedidosRequest,
  deletePedidosRequest,
  updatePedidosRequest,
  getPedidoRequest,
} from "../api/pedidos";

const PedidoContext = createContext();

export const usePedido = () => {
  const context = useContext(PedidoContext);

  if (!context) {
    throw new Error("usePedido must be used within in a provider");
  }

  return context;
};

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);

  const getPedidos = async () => {
    try {
      const res = await getPedidosRequest();
      setPedidos(res.data);
    } catch {
      console.error(error);
    }
  };
  const getPedido = async (id) => {
    try {
      const res = await getPedidoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createPedido = async (pedido) => {
    const res = await createPedidosRequest(pedido);
    console.log(res);
  };

  const deletePedido = async (id) => {
    try {
      const res = await deletePedidosRequest(id);
      if (res.status === 204)
        setPedidos(pedidos.filter((pedido) => pedido._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updatePedido = async (id, pedido) => {
    try {
      await updatePedidosRequest(id, pedido);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PedidoContext.Provider
      value={{
        pedidos,
        createPedido,
        getPedidos,
        getPedido,
        deletePedido,
        updatePedido,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
}
