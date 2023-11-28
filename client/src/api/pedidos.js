import axios from "./axios";

export const getPedidosRequest = () => axios.get("/pedidos");
export const getPedidoRequest = (id) => axios.get(`/pedidos/${id}`);
export const createPedidosRequest = (pedido) => axios.post("/pedidos", pedido);
export const updatePedidosRequest = (pedido) =>
  axios.put(`/pedidos/${pedido._id}`, pedido);
export const deletePedidosRequest = (id) => axios.delete(`pedidos/${id}`);
