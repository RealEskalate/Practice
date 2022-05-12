import {useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useDispatch,useStore} from 'react-redux';
import { logout } from '../store/slices/auth';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {
  const pages = ['Products', 'Pricing', 'Blog'];

  const store = useStore();
  const dispatch = useDispatch();
  const router = useRouter();
  const authentication = useSelector((state)=> state.entities.authentication);

  const logoutHandler = ()=>{
    dispatch(logout());
    if(authentication.user){
      router.push('/auth/login')
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App (React Demo)
          </Typography>
          {authentication.user?
          <> 
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
                 
          <Typography variant='h6' sx ={{margin: "5px"}}>{authentication.user.username}</Typography>
          <Button color="inherit" onClick={logoutHandler}>Logout</Button>
          
          </> :""}



        </Toolbar>
      </AppBar>
    </Box>
  );
}
