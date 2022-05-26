import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LocationOn from '@mui/icons-material/LocationOn';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { Alert, AlertTitle, Button, CardHeader } from '@mui/material';
import TextField from '../auth/TextField';
import { useState } from 'react';
import * as yup from 'yup'
import { useSession } from "next-auth/react"
import { Form, Formik } from 'formik';




const ProfileCard = () => {
  const { data: session } = useSession();

  const INITIAL_STATE = {
    firstname: session?.user?.name || "",
    lastname: session?.user?.name,
    username: session?.user?.email,
    password: '',
    confirmPassword: ''
  }

  const [INITIAL_STATE_VALUE, setInitialValue] = useState(INITIAL_STATE)
  const [isUpdated, setIsUpdated] = useState(false)

  const FORM_VALIDATION = yup.object().shape({
    firstname: yup.string().required("Required"),
    lastname: yup.string().required("Required"),
    username: yup.string().required("Required"),
    password: yup.string().min(8).required("Required"),
    confirmPassword: yup.string().min(8).required("Required")
  })

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
        <Formik
          initialValues={{ INITIAL_STATE_VALUE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={
            (value) => {
              console.log(value);
              setIsUpdated(true)
            }
          }
        >
          <Form>
            <Grid container spacing={2} >
              <Grid >
                <TextField name="firstname" label="First Name" />
              </Grid>
              <Grid >
                <TextField name="lastname" label="Last Name" />
              </Grid>
              <Grid >
                <TextField name="username" label="Username" />
              </Grid>
              <Grid>
                <TextField name="password" label="Password" type="password"  />
              </Grid>
              <Grid>
                <TextField name="confirmPassword" label="Confirm Password" type="password" />
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Button variant="contained" color="success">Update</Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      {isUpdated ?
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          <strong>User Successfully Registered!</strong>
        </Alert> : ""
      }
    </Grid>


  );
}


export default ProfileCard;