'use client'

import style from '@/app/ui/scss/pages/system.module.scss';

import { Dispatch, MouseEventHandler, SetStateAction, createContext, useState } from "react";
import { AppShell, Burger, NavLink } from "@mantine/core";
import { IconDashboard } from '@tabler/icons-react';
import NavRegister from "@/app/ui/components/sidebar/NavRegister";
import MyAvatar from '@/app/ui/components/header/MyAvatar';

interface ContextData {
  pageName: string,
  setPageName: Dispatch<SetStateAction<string>>
}

export const PageNameContext = createContext({} as ContextData);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pageName, setPageName] = useState('');

  function setOpenOnClick() {
    setOpen(!open);
  }

  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 200,
          breakpoint: 'sm',
          collapsed: { mobile: !open },
        }}
      >
        <AppShell.Header className={style.header}>
          {/*<Burger opened={open} onClick={setOpenOnClick} color='white' id="burger"/>*/}          
          <MyAvatar />
          <div id='pageName'>{pageName}</div>
        </AppShell.Header>

        <AppShell.Navbar p="sm">
          <NavLink            
            href="/system/dashboard"
            label="Dashboard"
            leftSection={<IconDashboard size="1rem" stroke={1.5} />}
          />

          <NavRegister />

        </AppShell.Navbar>

        <AppShell.Main>
          {children}
        </AppShell.Main>

      </AppShell>
    </PageNameContext.Provider>
  );
}