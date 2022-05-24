import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AuthButton from './AuthButton';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from "next-auth/react"


const style = {
  backgroundColor: "#607d8b",
  minHeight: "85vh",
  margin: "auto",
  padding: "30px 30px 20px 30px",
  marginTop: "50px",
  display: "flex",
  flexDirection: "column",
  boxShadow: 3,
  width: "100%",
  
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


const LoginCard = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [usernameHelperText, setUsernameHelperText] = useState("");
    const [passwordHelperText, setPasswordHelperText] = useState("");

    const router = useRouter();


    const usernameChange = (event: ChangeEvent<HTMLInputElement>)=>{
      setUsername(event.target.value);
      setUsernameError(false);
      setUsernameHelperText("");
    }
    const passwordChange = (event: ChangeEvent<HTMLInputElement>)=>{
      setPassword(event.target.value);
      setPasswordError(false);
      setPasswordHelperText("");
    }
    
    const handleClick = ()=>{
      
      if(username == ""){
        setUsernameError(true);
        setUsernameHelperText("Username required");
      }
      if(password == ""){
        setPasswordError(true);
        setPasswordHelperText("Password required");
      }
      
      if(username && password){
        signIn("credentials", {username, password,callbackUrl:`${window.location.origin}/`})

        setUsername("");
        setPassword("");
      }
    }

    return (
    <Box sx={style}>
        <Typography variant="h3" sx={h1Style}>Sign in</Typography>
        <Typography variant="h5" sx={{color: "#f00", m:"auto"}}>{router.query.error? router.query.error : ""}</Typography>
        <TextField  label="username" error={usernameError} helperText= {usernameHelperText} onChange={usernameChange} value={username} sx={inputStyle}/>
        <TextField type={"password"} label="password" error={passwordError} helperText={passwordHelperText} onChange={passwordChange} value={password} sx={inputStyle}/>  
        <AuthButton text="Login" ClickHandler={handleClick}/>
        <Typography sx={{color:'#fff', mx:'auto', mb:'15px'}}>-------------OR------------</Typography>
        <Stack sx={{color:'#fff', mx:'auto'}} spacing={1} direction="row">
        <GitHubIcon onClick= {() => signIn("github",{callbackUrl:`${window.location.origin}/`})}></GitHubIcon>
    
        </Stack>
        <Typography variant="h6" color="#fff">
          you don&apos;t have account?{" "}
          <Link href="/auth/register">
            <a>Signup</a>
          </Link>
        </Typography>
    </Box>
  );
}




export default LoginCard;