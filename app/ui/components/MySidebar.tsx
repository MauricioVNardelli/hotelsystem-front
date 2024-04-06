import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import MenuItemRegister from './sidebar/MenuItemRegister';
import style from '@/app/ui/components/scss/mySidebar.module.scss';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';

interface MySidebarProps {
  valueCollapsed: boolean
}

export function MySidebar(props: MySidebarProps) {
  return (   
    <div>
      <Sidebar width='200px' collapsed={props.valueCollapsed} rootStyles={{ height: '100%' }} >
        <Menu rootStyles={{ height: '100%' }}>

          <MenuItem 
            component={<Link href="/system/dashboard" />} 
            icon={<GridViewIcon/>}            
          >
            Dashboard
          </MenuItem>
          
          <MenuItemRegister />     

          <div className={style.containerFooter}>                                      
            <form action={async () => {
              
              alert('Implementar :)')
            }}>            
              <Button type='submit'><LogoutIcon /></Button>
            </form>
          </div>
        </Menu>
      </Sidebar> 
    </div>
  )
}