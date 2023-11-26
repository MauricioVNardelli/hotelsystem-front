'use client'

import { useFormState } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { MyButton, MyInput } from '@/app/ui/myComponents';
import Alert from '@mui/material/Alert';
import style from '@/app/ui/login.module.scss';
import { lavishly_yours, lato } from '@/app/ui/fonts';
import Image from 'next/image';

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
          <MyInput placeholder="Usuário" name="email" />
          <MyInput placeholder="Password" name="password" type='password'/>
          <MyButton type='submit'>Entrar</MyButton>

          {message === 'CredentialSignin' && 
            (
              <p>
                <Alert severity="error">Usuário ou senha incorreto</Alert>
              </p>
            )
          }
        </form>
      
      </div>
    </div>
  )
}