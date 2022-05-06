import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useDispatch,useStore} from 'react-redux';
import { logout } from '../store/slices/auth';
import { useRouter } from 'next/router';

export default function ButtonAppBar() {
  const pages = ['Products', 'Pricing', 'Blog'];
  const [user, setUser] = React.useState({});
  const store = useStore();
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(()=>{
    setUser(store.getState().entities.authentication.user);
  },[store])

  const logoutHandler = ()=>{
    dispatch(logout({}));
    router.push('/auth/login')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App (React Demo)
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button color="inherit" onClick={logoutHandler}>Logout</Button>
          <Typography variant='h6'>{user? user.username: ""}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
