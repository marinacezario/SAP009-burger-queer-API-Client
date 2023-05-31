import axios from 'axios';

const api = axios.create({
  baseURL: 'https://burger-queen-api-mock-rho.vercel.app/'
});

export default api;