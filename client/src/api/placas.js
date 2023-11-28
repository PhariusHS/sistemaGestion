import axios from "./axios";

export const getPlacasRequest = () => axios.get("/placas");
export const getPedidoRequest = (id) => axios.get(`/placas/${id}`);
export const createPlacasRequest = (pedido) => axios.post("/placas", pedido);
export const updatePlacasRequest = (pedido) =>
  axios.put(`/placas/${pedido._id}`, pedido);
export const deletePlacasRequest = (id) => axios.delete(`placas/${id}`);
