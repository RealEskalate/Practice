import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LocationOn from '@mui/icons-material/LocationOn';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { Button, CardHeader } from '@mui/material';
import TextField from '@mui/material/TextField';
import { getAuth, register } from '../../store/slices/auth';
import {ChangeEvent, useEffect, useState} from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux';
import {useRouter} from 'next/router';
import { useSession } from "next-auth/react"


const ProfileCard = () => {

  const {data: session} = useSession();
  const sess_name = session?.user?.name;
  const sess_email = session?.user?.email;
  const [fName,setFName] = useState("");
  const [fNameError, setFNameError] = useState(false);
  const [fNameHelperText, setFNameHelperText] = useState("");

  const [lName,setLName] = useState("");
  const [lNameError, setLNameError] = useState(false);
  const [lNameHelperText, setLNameHelperText] = useState("");

  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState(false);
  const [emailHelperText, setemailHelperText] = useState("");

  const [password, setPassword]= useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState("");


  const emailChange = (event: ChangeEvent<HTMLInputElement>)=>{
    setemail(event.target.value);
    setemailError(false);
    setemailHelperText("");
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
  const authentication = useSelector((state: any) => getAuth(state));

  useEffect(()=>{  
      if(authentication.user){
        router.push('/')
      }
    },[authentication])

  const handleClick = ()=>{
      if(lName == ""){
          setLNameError(true);
          setLNameHelperText("Last Name required");
      }
      if(fName == ""){
          setFNameError(true);
          setFNameHelperText("First Name required");
      }
      if(email == ""){
          setemailError(true);
          setemailHelperText("email required");
      }
      
      if(confirmPassword == "" && password != ""){
          setConfirmPasswordError(true);
          setConfirmPasswordHelperText("Confirm Password required");
      }
      if(fName && lName && email && password && confirmPassword){
         
          dispatch(register({firstName: fName, lastName: lName, username: email, password, confirmPassword}))
      
          setFName("");
          setLName("");
          setemail("");
          setPassword("");
          setConfirmPassword("");
          
          
        }
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Box sx={{ width: '25%', m: 10 }}>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >

          <Avatar />
        </Grid>

        <Card>
          <CardHeader
            title="Alec Thompson"
            subheader="CEO / CO-FOUNDER"
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <LocationOn /> Scranton, PA
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae aliquam voluptatibus sint accusamus sit cupiditate at cumque doloribus nesciunt, deserunt, nam perspiciatis, sapiente itaque? Totam rerum beatae hic facilis quia?
            </p>
          </CardContent>

          <Switch /> Online
        </Card>



      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2.5, width: '25ch' },
          width: '50%',
          m: 5
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField  
        label="first name" 
        variant="standard"
        InputProps={{
          readOnly: true,
        }}
        error={fNameError} 
        helperText={fNameHelperText} 
        value={sess_name} onChange={fNameChange} />
        
        <TextField 
        label="last name" 
        variant="standard"
        InputProps={{
          readOnly: true,
        }}
        error={lNameError} 
        helperText={lNameHelperText} 
        value={sess_name} 
        onChange={lNameChange} />           

        <TextField 
        label="email" 
        variant="standard"
        disabled
        error={emailError} 
        helperText= {emailHelperText} 
        onChange={emailChange} 
        value={sess_email}/>
            
          <TextField 
          label="password change" 
          id="standard-password-input"
          type="password"
          variant="standard"
          error={passwordError} 
          helperText={passwordHelperText} 
          onChange={passwordChange} 
          value={password} />
          
          <TextField 
          label="confirm password change" 
          id="standard-password-input-confirm"
          type="password"
          variant="standard"
          error={confirmPasswordError} 
          helperText={confirmPasswordHelperText} 
          onChange={confirmPasswordChange} 
          value={confirmPassword} />
            
            
          
          
        </div>
        <Button variant="contained" color="success" onClick={handleClick} sx={{ width: '25%', m: 3 }}>
            Update
          </Button>
      </Box>
      
    </Grid>


  );
}


export default ProfileCard;