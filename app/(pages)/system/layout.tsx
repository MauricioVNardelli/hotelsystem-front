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

  const widthSideBar = collapsed ? 80 : 200;

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>      
      <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
        <div>
          <MyTopbar setCollapsed={setCollapsed} valueCollapsed={collapsed} />
        </div>

        <div className={style.container}>
          <div className={style.sidebar}>
            <MySidebar valueCollapsed={collapsed} /> 
          </div>
          
          <div style={{maxWidth: `calc(100% - ${widthSideBar}px)`}} className={style.content}>
            {children}
          </div>
        </div>
      </div>
    </PageNameContext.Provider>
  );
}