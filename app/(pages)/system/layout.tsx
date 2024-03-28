'use client'

import style from "@/app/ui/components/scss/pages/system.module.scss"

import { MySidebar } from "@/app/ui/components/MySidebar";
import { MyTopbar } from "@/app/ui/components/MyTopbar";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface ContextData {
  pageName: string,
  setPageName: Dispatch<SetStateAction<string>>
}

export const PageNameContext = createContext({} as ContextData);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [pageName, setPageName] = useState("Nome da tela");

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <div className={style.conteiner}>
        <MyTopbar setCollapsed={setCollapsed} valueCollapsed={collapsed} />

        <div className={style.sidebar}>
          <MySidebar valueCollapsed={collapsed} /> 
          
          <div style={{ width: '100%' }}>
            {children}
          </div>
        </div>
      </div>
    </PageNameContext.Provider>
  );
}