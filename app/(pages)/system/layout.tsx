'use client'

import MySidebar from "@/app/ui/components/MySidebar";
import style from "@/app/ui/components/scss/system.module.scss"
import MyTopbar from "@/app/ui/components/MyTopbar";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

    return (        
      <div className={style.conteiner}>
        <MyTopbar setCollapsed={setCollapsed} valueCollapsed={collapsed} />

        <div className={style.sidebar}>
          <MySidebar valueCollapsed={collapsed} /> 
          
          <div style={{ width: '100%' }}>
            {children}
          </div>
        </div>

      </div>
    );
  }