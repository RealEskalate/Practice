import * as React from 'react'
import { Card, Box, Avatar, Switch, Grid, CardContent } from '@mui/material'
import LocationOn from '@mui/icons-material/LocationOn'

import {
  Alert,
  AlertTitle,
  CardHeader,
  CircularProgress,
  TextField,
  Button,
} from '@mui/material'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { useSession } from 'next-auth/react'
import { Form, Formik } from 'formik'
import AuthApiCall from '../../../util/AuthApiCall'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/router'

const ProfileCard = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const INITIAL_STATE = {
    firstname: session?.user?.name?.split(' ')[0] || '',
    lastname: session?.user?.name?.split(' ')[1] || '',
    email: session?.user?.email || '',
    password: '',
    confirmPassword: '',
  }

  const [INITIAL_STATE_VALUE, setInitialValue] = useState(INITIAL_STATE)
  const [isUpdated, setIsUpdated] = useState(false)
  const [updateFail, setUpdateFailed] = useState('')
  const [loading, setLoading] = useState(false)

  const FORM_VALIDATION = yup.object().shape({
    firstname: yup.string().required('Required'),
    lastname: yup.string().required('Required'),
    email: yup.string().required('Required').email('Invalid Email'),
    password: yup.string().min(8).required('Required'),
    confirmPassword: yup.string().min(8).required('Required'),
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
            title={session?.user?.name || ''}
            subheader="CEO / CO-FOUNDER"
          />
          <CardContent sx={{ flex: '1 0 auto' }}>
            <LocationOn /> Scranton, PA
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae aliquam voluptatibus sint accusamus sit cupiditate at
              cumque doloribus nesciunt, deserunt, nam perspiciatis, sapiente
              itaque? Totam rerum beatae hic facilis quia?
            </p>
          </CardContent>
          <Switch /> Online
        </Card>
      </Box>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 2.5, width: '25ch' },
          width: '50%',
          m: 5,
        }}
      >
        <Formik
          initialValues={INITIAL_STATE_VALUE}
          validationSchema={FORM_VALIDATION}
          onSubmit={async (value) => {
            setLoading(true)
            if (value.password !== value.confirmPassword) {
              setUpdateFailed("Password don't match")
            } else {
              const user = {
                fullName: `${value.firstname} ${value.lastname}`,
                email: value.email,
                password: value.password,
              }
              const res = await AuthApiCall.UpdateUser(
                user,
                session?.id,
                session?.access_token
              )
              if (res) {
                setIsUpdated(true)
              } else {
                setUpdateFailed('User Update Failed!')
              }
              setLoading(false)
            }
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid>
                <TextField name="firstname" label="First Name" />
              </Grid>
              <Grid>
                <TextField name="lastname" label="Last Name" />
              </Grid>
              <Grid>
                <TextField name="email" label="Email" />
              </Grid>
              <Grid>
                <TextField name="password" label="Password" type="password" />
              </Grid>
              <Grid>
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Button variant="contained" fullWidth sx={{ width: 'auto' }}>
                  {' '}
                  {!loading ? (
                    'Update'
                  ) : (
                    <CircularProgress sx={{ color: '#fff' }} />
                  )}
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
      {isUpdated ? (
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsUpdated(false)
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Success</AlertTitle>
          <strong>User Registered Successfully!</strong>
        </Alert>
      ) : updateFail ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setUpdateFailed('')
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Failed</AlertTitle>
          <strong>User Failed to register!</strong>
        </Alert>
      ) : (
        ''
      )}
    </Grid>
  )
}

export default ProfileCard
