import {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google'
import TwitterIcon from '@mui/icons-material/Twitter';
import { signIn } from "next-auth/react"
import { Grid } from '@mui/material';
import * as yup from 'yup'
import { Formik, Form } from 'formik';
import TextField from './TextField'
import Button from './AuthButton';


const LoginCard = (props)=>{
    
    const [INITIAL_STATE_VALUE, setValue] = useState({
      email: '',
      password: ''
    })

    const FORM_VALIDATION = yup.object().shape({
      email: yup.string().required("Required").email("Invalid"),
      password: yup.string().min(8).required("Required")
    })

    return (
    <Box sx={{mt: 4, px: 4, boxShadow: 3, textAlign:'center', minHeight: "80vh"}}>
        <Typography sx={{my: 1}} variant="h3">SignIn</Typography>
        <Grid container>
          <Formik
            initialValues={INITIAL_STATE_VALUE}
            validationSchema = {FORM_VALIDATION}
            onSubmit = {
              (value) =>{
                  signIn('credentials', {callbackUrl: `${window.location.origin}/`, email: value.email, password: value.password})   
              }
            }
          >
            <Form>
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <TextField  name="email" label="Email" type='email'/>
                </Grid>
                <Grid item xs={12}>
                  <TextField  name="password" label="Password" type = "password"/>
                </Grid>
                <Grid item xs={12} sx={{mt: 3}}>
                  <Button>Submit</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
        <Grid container spacing={14} sx={{mx:"auto", pt: 5}}>
          <Grid item xs={2}>
              <GitHubIcon></GitHubIcon>
          </Grid>
          <Grid item xs={2}>
              <GoogleIcon></GoogleIcon>
          </Grid>
          <Grid item xs={2}>
              <TwitterIcon></TwitterIcon>
          </Grid>
        </Grid>
        <Typography sx={{my: 4}}>
          You don&apos;t have account?{' '} 
          <Link href="/auth/register">
                    <a>register</a>
          </Link>  
        </Typography>
    </Box>
  );
}




export default LoginCard;