import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import AuthButton from './AuthButton';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { login} from '../../store/slices/auth';
import { apiCallBegan } from '../../store/api';
import { useDispatch, useStore} from 'react-redux';

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

    const dispatch: any = useDispatch();
    const store: any = useStore();

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
        dispatch({type:apiCallBegan.type, payload:{url: "/login", method: "post",onSuccess: login.type,data:{username,password}}});

        setUsername("");
        setPassword("");
     
        if(store.getState().entities.authentication.isLogin){
          
          router.push('/')
        }
      }
    }

    return (
    <Box sx={style}>
        <Typography variant="h3" sx={h1Style}>Sign in</Typography>
        <TextField  label="username" error={usernameError} helperText= {usernameHelperText} onChange={usernameChange} value={username} sx={inputStyle}/>
        <TextField label="password" error={passwordError} helperText={passwordHelperText} onChange={passwordChange} value={password} sx={inputStyle}/>  
        <AuthButton text="Login" ClickHandler={handleClick}/>
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