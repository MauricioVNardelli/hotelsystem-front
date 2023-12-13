'use server'

import axios from 'axios';
import { cookies } from 'next/headers';

function getToken() {
  console.log('gettoken');
  const cookieStore = cookies();

  return `Bearer ${ cookieStore.get('next-auth.session-token')?.value }` ;
}

export const api = axios.create({
  //baseURL: 'http://localhost:3333',
  baseURL: 'https://back-end-hotel.onrender.com',
  headers: {
    Authorization: getToken()
  }
})