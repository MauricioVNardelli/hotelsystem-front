import axios from 'axios';
//import { parseCookies } from 'nookies';

export const api = axios.create({
  //baseURL: 'http://localhost:3333',
  baseURL: 'https://back-end-hotel.onrender.com',
  headers: {
    //Authorization: `Bearer ${parseCookies()['tokenAPI']}`
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWF1cmljaW8gTmFyZGVsbGkiLCJlbWFpbCI6Im1hdW5hcmRlbGxpQGdtYWlsLmNvbSIsImlhdCI6MTcwNzQ3Mzg3OSwiZXhwIjoxNzEwMDY1ODc5LCJzdWIiOiIxIn0.ZdTCczDUHbIvAXlPyWmYiQQlMLq8SpIV4_G2cFew3kM'
  }
})