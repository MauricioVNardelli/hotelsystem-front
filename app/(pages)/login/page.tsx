'use client'

import style from '@/app/ui/components/scss/pages/login.module.scss';

import { useFormState, useFormStatus } from 'react-dom';
import { lavishly_yours, lato } from '@/app/ui/fonts';
import Image from 'next/image';
import Alert from '@mui/material/Alert';

import { MyInput } from '@/app/ui/components/MyInput';
import { MyButton } from '@/app/ui/components/MyButton';
import { useContext } from 'react';
import { AuthContext } from '@/app/contexts/AuthContext';
import { SignInData } from '@/app/lib/definitions';

export default function Login() {
  const [message, formAction] = useFormState(authenticate, undefined);
  const { signIn } = useContext(AuthContext);

  async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    const data = Object.fromEntries(formData) as SignInData;
  
    try {
      await signIn(data);
    
    } catch (error) {
  
      if ((error as Error).message.includes('CredentialsSignin')) {
        return 'CredentialSignin';
      }
    
      throw error;
    }
  }

  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        
        <h1 className={style.Logo}>
          <p className={`${lavishly_yours.className}`}>h</p>
        </h1>

        <h2>
          <p className={`${lato.className}`}>H O T E L</p>
        </h2>

        <h3>
          <p className={`${lato.className}`}>S y s t e m</p>
        </h3>
      </div>
      
      <div className={style.dividingLine}/>

      <div className={style.containerLogin}>
        
        <Image 
          src='/logoEmpresa.png' 
          alt='Logo da empresa' 
          width={120}
          height={100}
        />
        
        <h1>Entrar</h1>
        
        <form action={formAction}>
          <MyInput name="email" label="Usuário" />
          <MyInput name="password" label="Senha" type='password'/>
          <LoginButton/>
        </form>
      
        {message === 'CredentialSignin' && 
          (
            <Alert 
              severity="error" 
              sx={{marginTop: 2}}
            >
              Usuário ou senha incorreto
            </Alert>
          )
        }     
      </div>
    </div>
  )
}

function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <MyButton type='submit' loading={pending}>Entrar</MyButton>
  )
}