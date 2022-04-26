import {ChangeEvent, useState} from 'react';
import Box from '@mui/material/Box';
import { Typography, OutlinedInput, TextField} from '@mui/material';
import AuthButton from './AuthButton';
import Link from 'next/link';
import { register } from '../../store/slices/auth';
import { useDispatch, useStore} from 'react-redux';
import {useRouter} from 'next/router';

const style = {
        backgroundColor: "#607d8b",
        minHeight: "85vh",
        margin: "auto",
        padding: "30px 30px 20px 30px",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        margin:"10px 0px"
    }
    const divStyle = {
        display: "flex",
        justifyContent: "space-between"
    }



const RegisterCard = ()=>{
    const [fName,setFName] = useState("");
    const [fNameError, setFNameError] = useState(false);
    const [fNameHelperText, setFNameHelperText] = useState("");

    const [lName,setLName] = useState("");
    const [lNameError, setLNameError] = useState(false);
    const [lNameHelperText, setLNameHelperText] = useState("");

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [usernameHelperText, setUsernameHelperText] = useState("");

    const [password, setPassword]= useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState("");

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
    const confirmPasswordChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setConfirmPassword(event.target.value);
        setConfirmPasswordError(false);
        setConfirmPasswordHelperText("");
      }
    const fNameChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setFName(event.target.value);
        setFNameError(false);
        setFNameHelperText("");
    }
    const lNameChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setLName(event.target.value);
        setLNameError(false);
        setLNameHelperText("");
    }

    const dispatch: any = useDispatch();
    const router = useRouter();
    const store: any = useStore();

    const handleClick = ()=>{
        if(lName == ""){
            setLNameError(true);
            setLNameHelperText("Last Name required");
        }
        if(fName == ""){
            setFNameError(true);
            setFNameHelperText("First Name required");
        }
        if(username == ""){
            setUsernameError(true);
            setUsernameHelperText("Username required");
        }
        if(password == ""){
            setPasswordError(true);
            setPasswordHelperText("Password required");
        }
        
        if(confirmPassword == ""){
            setConfirmPasswordError(true);
            setConfirmPasswordHelperText("Confirm Password required");
        }
        if(fName && lName && username && password && confirmPassword){
            dispatch(register({firstName: fName, lastName: lName, username, password, confirmPassword}));

            setFName("");
            setLName("");
            setUsername("");
            setPassword("");
            setConfirmPassword("");

            if(store.getState().entities.authentication.isLogin){
                router.push('/')
              }
          }
    }

    return (
        <Box sx={style}>
            <Typography variant="h3" sx={h1Style}>Sign Up</Typography>
            <div style={divStyle}>
                <TextField  label="first name" error={fNameError} helperText={fNameHelperText} value={fName} onChange={fNameChange} sx={inputStyle}/>
                <TextField label="last name" error={lNameError} helperText={lNameHelperText} value={lName} onChange={lNameChange} sx={inputStyle}/>           
            </div>
            <TextField label="username" error={usernameError} helperText= {usernameHelperText} onChange={usernameChange} value={username} sx={inputStyle}/>
            <TextField label="password" error={passwordError} helperText={passwordHelperText} onChange={passwordChange} value={password} sx={inputStyle}/>
            <TextField label="confirm password" error={confirmPasswordError} helperText={confirmPasswordHelperText} onChange={confirmPasswordChange} value={confirmPassword} sx={inputStyle}/>
            <AuthButton  text="Register" ClickHandler={handleClick}/>
            <Typography variant="h6" color="#fff" sx={h1Style}>
                ---------------{' '}
                <Link href="/auth/login">
                    <a>Signin</a>
                </Link>
                {' '}---------------
            </Typography>
        </Box>
    )

}

export default RegisterCard;