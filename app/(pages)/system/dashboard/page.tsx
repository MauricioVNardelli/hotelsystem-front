'use client'

import style from "@/app/ui/components/scss/pages/dashboard.module.scss"
import { useEffect } from "react";

export default function Dashboard() {
  
  useEffect(() => {
    const element = document.getElementById('screenName');
  
    if (element)
      element.innerHTML = "Dashboard";
  })

  return (
    <div className={style.conteiner}>
      <h1>Dashboard</h1>
    </div>
  )
}