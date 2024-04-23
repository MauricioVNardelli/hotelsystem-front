import axios, { AxiosInstance } from "axios";
import { parseCookies } from "nookies";

function getAPIClient(): AxiosInstance {
  const { 'hotelsystem.token': token } = parseCookies()

  const api = axios.create({
    baseURL: 'http://localhost:3333'
    //baseURL: 'https://back-end-hotel.onrender.com'
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}

export const api = getAPIClient();