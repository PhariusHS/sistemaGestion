import axios from "./axios";

export const getPlacasRequest = () => axios.get("/placas");
export const getPlacaRequest = (id) => axios.get(`/placas/${id}`);
export const createPlacasRequest = (placa) => axios.post("/placas", placa);
export const updatePlacasRequest = (placa) =>
  axios.put(`/placas/${placa._id}`, placa);
export const deletePlacasRequest = (id) => axios.delete(`placas/${id}`);
