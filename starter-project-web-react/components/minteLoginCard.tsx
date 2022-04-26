import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

import LoginButton from './minteLoginButton';

const LoginCard = ()=>{
    const style = {
        backgroundColor: "#607d8b",
        minHeight: "85vh",
        margin: "auto",
        padding: "30px 30px 20px 30px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        // "justify-content": "center",

        boxShadow: 3,
        width: "80%",
        
      }
    const inputStyle = {
        backgroundColor:"#f5f5f5",
        margin:"10px 0px"
        
    }
    const h1Style = {
        color: "#fff",
        textAlign: "center",
        margin:"20px 0px"
    }
    return (
    <Box sx={style}>
        <Typography variant="h3" sx={h1Style}>Sign in</Typography>
        <OutlinedInput sx={inputStyle}/>
        <OutlinedInput sx={inputStyle}/>
        <LoginButton/>
        <Typography variant="h6" color="#fff">you forgot password?</Typography>
    </Box>
  );
}


export default LoginCard;