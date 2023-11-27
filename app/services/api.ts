import axios from 'axios';
import { cookies } from 'next/headers'


function getToken() {
  const cookieStore = cookies();

  return `Bearer ${ '' }` ; //cookieStore.get('next-auth.session-token');
}

export const api = axios.create({
    //baseURL: 'http://localhost:3333',
    baseURL: 'https://back-end-hotel.onrender.com',
    headers: {
      Authorization: getToken()
    }
  })