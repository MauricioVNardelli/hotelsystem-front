import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import MenuItemRegister from './sidebar/MenuItemRegister';
import style from '@/app/ui/components/scss/mySidebar.module.scss';
import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';

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
            icon={<GridViewIcon/>}            
          >
            Dashboard
          </MenuItem>
          
          <MenuItemRegister />

        </Menu>
      </Sidebar> 
    </div>
  )
}