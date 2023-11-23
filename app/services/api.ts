import axios, { AxiosError } from 'axios';
import { parseCookies } from 'nookies';
import nookies from 'nookies';

export const api = axios.create({
    //baseURL: 'http://localhost:3333',
    baseURL: 'https://back-end-hotel.onrender.com',
    headers: {
      Authorization: `Bearer ${ "teste 2" }`
    }
  })