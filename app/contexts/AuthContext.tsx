"use client"

import { destroyCookie, setCookie, parseCookies } from "nookies";
import { createContext, ReactNode, use, useState } from "react";
import { api } from "@/app/services/apiClient";

type AuthContextData = {
  user?: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
}

type UserProps = {
  id: string;
  name: string;
  email: string; 
}

type SignInProps = {
  email: string;
  password: string;
} 

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {

  try {    
    destroyCookie(undefined, '@nextauth.token');
  } catch {
    //
  }
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user; //!! informa se é null ou nao o objeto

  async function signIn({ email, password } : SignInProps) {
    
    try {

      const response = await api.post('/session', {
        email, password
      })

      const { id, token } = response.data;
      
      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, //Expira em 1 mes
        path: "/" //Quais caminhos terao acesso
      })

      setUser({
        id,
        name: email,
        email
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`;

    } catch(err) {          
      //toast.error("Erro ao acessar");
      console.log(err);
    }
    
  }

  return (
    <AuthContext.Provider value={ { user, isAuthenticated, signIn, signOut } }>
      {children}
    </AuthContext.Provider>
  )
}