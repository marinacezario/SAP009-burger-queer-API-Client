import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://burger-queen-api-mock-rho.vercel.app/'
})
