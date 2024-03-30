'use server';

import { signIn } from "@/auth";
import { cookies } from 'next/headers'
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  console.log('Authenticate', formData);
  
  try {
    await signIn('credentials', Object.fromEntries(formData));
  
  } catch (error) {

    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
  
    throw error;
  }
}

export async function getTokenAPI() {
  const cookieStore = cookies();
  const tokenApi = await cookieStore.get('tokenAPI')?.value;

  return `bearer ${tokenApi}`;
}