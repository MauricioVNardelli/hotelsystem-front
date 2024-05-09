import style from '@/app/ui/components/scss/mySidebar.module.scss';

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { IconDashboard } from '@tabler/icons-react';

import MenuItemRegister from './sidebar/NavRegister';
import Link from 'next/link';


interface MySidebarProps extends React.RefAttributes<HTMLHtmlElement> {
  valueCollapsed: boolean
}

export function MySidebar(props: MySidebarProps) {
  return (   
    <div className={style.container}>
      <Sidebar width='200px' collapsed={props.valueCollapsed} {...props} >
        <Menu>

          <MenuItem 
            component={<Link href="/system/dashboard" />} 
            icon={<IconDashboard/>}            
          >
            Dashboard
          </MenuItem>
          
          <MenuItemRegister />

        </Menu>
      </Sidebar> 
    </div>
  )
}