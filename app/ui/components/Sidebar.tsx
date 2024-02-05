import style from '@/app/ui/components/sidebar.module.scss';
import Avatar from '@mui/joy/Avatar';
import Divider from '@mui/joy/Divider';
import SidebarListRegister from './register/SidebarList';
import { Button } from '@mui/material';
import { signOut } from '@/auth';
import { auth } from '@/auth';

export default async function Sidebar() {
  const session = await auth();

  return (
    <div className={style.container}>
      
      <div className={style.containerUser}>
        <Avatar color='primary'>M</Avatar>
        <p>{session?.user?.name}</p>
      </div>      

      <Divider />

      <div className=''>
        <SidebarListRegister />
      </div>      

      <div className={style.containerFooter}>
        
        <Divider />
        
        <form action={async () => {
          'use server'
          await signOut()
        }}>
          <Button type='submit'>Sair</Button>
        </form>
      </div>
    </div>
  )
}