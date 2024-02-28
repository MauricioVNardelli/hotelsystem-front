'use client'

import { useEffect } from "react";

export default function Cadastro_Usuario() {
  
  useEffect(() => {
    const element = document.getElementById('screenName');
  
    if (element)
      element.innerHTML = "Cadastro de usuário";
  })  

  return (
    <div>
      <div className="">
        <h1>Cadastro de usuario</h1>
      </div>          
    </div>
  )
} 