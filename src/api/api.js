import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://burger-queer-api-mock.vercel.app/'
});

