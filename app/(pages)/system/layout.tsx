'use client'

import style from "@/app/ui/components/scss/pages/system.module.scss"

import { MySidebar } from "@/app/ui/components/MySidebar";
import { MyTopbar } from "@/app/ui/components/MyTopbar";
import { Dispatch, SetStateAction, createContext, useRef, useState } from "react";

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
      <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <div>
          <MyTopbar setCollapsed={setCollapsed} valueCollapsed={collapsed} />
        </div>

        <div style={{flex: '1'}}>
          <div className={style.container}>
            <div className={style.sidebar}>
              <MySidebar valueCollapsed={collapsed} /> 
            </div>
            
            <div className={style.content}>
              {children}
            </div>
          </div>
        </div>

      </div>
    </PageNameContext.Provider>
  );
}