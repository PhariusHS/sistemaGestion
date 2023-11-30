import { createContext, useContext, useState } from "react";
import { createPedidosRequest, getPedidosRequest } from "../api/pedidos";

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

  const createPedido = async (pedido) => {
    const res = await createPedidosRequest(pedido);
    console.log(res);
  };

  return (
    <PedidoContext.Provider
      value={{
        pedidos,
        createPedido,
        getPedidos,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
}
