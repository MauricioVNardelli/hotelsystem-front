'use server'

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import axios from 'axios';
import { cookies } from 'next/headers'

type ErrorResponse = {
  error: string
}

async function getUser(email: string, password: string): Promise<User | undefined> {
  
  try {        
    
    let user;

    await axios.post('https://back-end-hotel.onrender.com/session', {
      email, 
      password
    })
    .then(function(response) {
      user = <User>response.data;
    })
    .catch(function(error) {
      const msgError = <ErrorResponse>error.response.data;

      console.error(msgError.error);
    });
    
    return user;

  } catch (error) {  
    throw new Error('CredentialsSignin');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);
        
        if (parsedCredentials.success) {

          const { email, password } = parsedCredentials.data;
          const user = await getUser(email, password);          

          if (!user)
            return null;
          
          //registrar token nos cookies
          //cookies().set('tokenAPI', user.token || "");
          
          return user;
        }
 
        return null;
      },
    }),
  ],
});