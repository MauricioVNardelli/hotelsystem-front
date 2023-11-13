'use client'

import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { MyButton } from '@/app/ui/myComponents';

export default function Login() {
  const [message, formAction] = useFormState(authenticate, undefined);

  return (
    <div>
      <h1>Login</h1>
      
      <form action={formAction}>
        <input placeholder="Usuário" name="email" />
        <input placeholder="Password" name="password" />
        <MyButton type='submit'>Entrar</MyButton>
      </form>
      {message === 'CredentialSignin' && 
        (
          <p>
            Usuário ou senha incorreto
          </p>
        )
      }
    </div>
  )
}