import axios from 'axios'

const API = 'http://localhost:4000/api' //url backend
export const registerRequest = (user) => axios.post(`${API}/register`, user)