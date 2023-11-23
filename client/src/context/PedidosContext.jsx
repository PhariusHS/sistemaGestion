import { createContext, useContext, useState } from "react";

const PedidoContext = createContext();

export const usePedido = () => {
  const context = useContext(PedidoContext);

  if (!context) {
    throw new Error("usePedido must be used within in a provider");
  }

  return context;
};

export function PedidosProvider({children}) {
  const [pedidos, setPedidos] = useState([]);

  const createPedido = async(pedido) =>{

    console.log(pedido)

  }

  return (
    <PedidoContext.Provider
      value={{
        pedidos,
        createPedido,
        
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
}
