'use client'

import { ReactNode, createContext, useState } from "react";
import { setCookie } from 'nookies'

import { api } from "../services/api";
import { type User, SignInData } from "../lib/definitions";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user;
  const router = useRouter();

  async function signIn({ email, password }: SignInData) {
    
    await api.post('https://back-end-hotel.onrender.com/session', {
      email, 
      password
    })
    .then(function(response) {
      const user: User = response.data;

      setCookie(undefined, 'hotelsystem.token', user.token, {
        maxAge: 60 * 60 * 24, // 24 hour
      })

      api.defaults.headers['Authorization'] = `Bearer ${user.token}`;
      setUser(user);      
      router.push('/dashboard');
    })
    .catch(function(response) {
      throw new Error('CredentialsSignin');
    });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}