'use client'

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import Alert from '@mui/material/Alert';
import style from '@/app/ui/components/scss/login.module.scss';
import { lavishly_yours, lato } from '@/app/ui/fonts';
import Image from 'next/image';
import { MyInput } from '@/app/ui/components/MyInput';
import { MyButton } from '@/app/ui/components/MyButton';

export default function Login() {
  const [message, formAction] = useFormState(authenticate, undefined);

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
          <MyInput name="email" placeholder="Usuário" />
          <MyInput name="password" placeholder="Senha" type='password'/>
          <LoginButton/>
        </form>
      
        {message === 'CredentialSignin' && 
          (
            <Alert severity="error" sx={{marginTop: 2}}>Usuário ou senha incorreto</Alert>
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