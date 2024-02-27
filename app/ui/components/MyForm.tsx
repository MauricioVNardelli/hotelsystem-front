'use client'

import { useEffect } from "react";
import style from '@/app/ui/components/scss/myForm.module.scss'

export function MyForm({ children }: { children: React.ReactNode }, {...props}) {
  
  useEffect(() => {
    const element = document.getElementById('screenName');
  
    if (element)
      element.innerHTML = "Pessoa";
  })
  
  return (
    <div className={style.conteiner}>
      <form className={style.form} {...props}>
        {children}
      </form>
    </div>
  )
}