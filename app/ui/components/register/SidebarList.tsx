import Link from 'next/link'
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

export default function SidebarListRegister() {
  
  return (
    <List sx={{ gap: 0.5 }}>
      
      <ListItem sx={{ mt: 0.5 }}>
        <Link href='/system/register/person'>
          <ListItemButton>Pessoa</ListItemButton>
        </Link>
      </ListItem>
  
      <ListItem>
        <Link href='/system/register/user'>
          <ListItemButton>Usuário</ListItemButton>
        </Link>
      </ListItem>
    
    </List>
  )
}