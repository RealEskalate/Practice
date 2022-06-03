import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import Link from 'next/link';
import {useRouter} from 'next/router';
import * as yup from 'yup'
import { Formik, Form } from 'formik';
import TextField from './TextField'
import Button from './AuthButton';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const INITIAL_STATE =  {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

const RegisterCard = ()=>{
    const [INITIAL_STATE_VALUE, setInitialValue] = useState(INITIAL_STATE)
    const [isRegistered, setIsRegistered] = useState(false)
  
      const FORM_VALIDATION = yup.object().shape({
        firstname: yup.string().required("Required"),
        lastname: yup.string().required("Required"),
        username: yup.string().required("Required"),
        password: yup.string().min(8).required("Required"),
        confirmPassword: yup.string().min(8).required("Required")
      })
  
      return (
      <Box sx={{pt: 1, mt:4, px: 4, boxShadow: 3, textAlign:'center', minHeight: "80vh"}}>
          <Typography sx={{mb: 2}} variant="h3">SignUp</Typography>
          <Grid container>
            <Formik
              initialValues={{INITIAL_STATE_VALUE}}
              validationSchema = {FORM_VALIDATION}
              onSubmit = {
                (value) =>{
                    console.log(value);
                    setIsRegistered(true)
                }
              }
            >
              <Form>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <TextField  name="firstname" label="First Name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  name="lastname" label="Last Name"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  name="username" label="Username"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  name="password" label="Password" type = "password"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  name="confirmPassword" label="Confirm Password" type = "password"/>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 1}}>
                        <Button>Submit</Button>
                    </Grid>
                </Grid>
              </Form>
            </Formik>
          </Grid>
          {isRegistered?
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                 <strong>User Successfully Registered!</strong>
            </Alert>: ""
          }
          <Typography sx={{my: 4}}>
            already have an account?{' '} 
            <Link href="/auth/login">
                      <a>signin</a>
            </Link>  
          </Typography>
      </Box>
    );

}

export default RegisterCard;