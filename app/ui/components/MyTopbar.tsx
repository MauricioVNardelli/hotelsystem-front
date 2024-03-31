import { Badge } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useContext } from 'react';
import { PageNameContext } from '@/app/(pages)/system/layout';

interface MyTopbarProps {
  setCollapsed: (value: boolean) => void;
  valueCollapsed: boolean
}

export function MyTopbar(props: MyTopbarProps) {
  //const session = await auth(); {session?.user?.name}
  const { pageName } = useContext(PageNameContext);

  function handleMenuClick(event: React.MouseEvent<HTMLElement>) {
    props.setCollapsed(!props.valueCollapsed);
  }

  return (
    <div>
      <Box>
        <AppBar position="relative" style={{ backgroundColor: '#5C68AC' }}>
          <Toolbar>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>

            <Typography id='screenName' variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {pageName}
            </Typography>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}