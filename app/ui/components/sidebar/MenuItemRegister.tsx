import Link from 'next/link';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export default function MenuItemRegister() {
  
  return (
    <SubMenu label="Cadastro" icon={<AppRegistrationIcon/>}>
      <MenuItem 
        component={<Link href="/system/register/person" />}        
      >
        Pessoa
      </MenuItem>
      
      <MenuItem 
        component={<Link href="/system/register/user" />}
      >
        Usuário
      </MenuItem>
    </SubMenu>
  )
}