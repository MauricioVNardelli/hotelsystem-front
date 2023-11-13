import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { api } from '@/app/services/api';

type ErrorResponse = {
  error: string
}

async function getUser(email: string, password: string): Promise<User | undefined> {
  
  try {        
    
    await api
    .post('/session', { email, password } )
    .then(function(response) {      
      const user = <User>response.data;

      console.log(response.data);
      return user;
    })
    .catch(function(error) {
      const msgError = <ErrorResponse>error.response.data;

      console.error(msgError.error);
    });        

    return undefined;

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
          
          //console.log(user);

          if (!user) 
            return null;
          
          return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});