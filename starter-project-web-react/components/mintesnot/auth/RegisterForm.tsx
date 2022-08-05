import { useState } from 'react'
import Box from '@mui/material/Box'
import { Typography, Grid, Button, TextField } from '@mui/material'
import Link from 'next/link'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import AuthApiCall from '../../../util/AuthApiCall'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const RegisterForm = () => {
  const [INITIAL_STATE_VALUE, setInitialValue] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isRegistered, setIsRegistered] = useState(false)
  const [registerFail, setRegisterFail] = useState('')
  const [loading, setLoading] = useState(false)

  const FORM_VALIDATION = yup.object().shape({
    fullname: yup.string().required('Required'),
    email: yup.string().required('Required').email('Invalid Email'),
    password: yup.string().min(8).required('Required'),
    confirmPassword: yup.string().min(8).required('Required'),
  })

  return (
    <Box
      sx={{
        pt: 1,
        mt: 4,
        px: 4,
        boxShadow: 3,
        textAlign: 'center',
        minHeight: '80vh',
      }}
    >
      <Typography sx={{ mb: 2 }} variant="h3">
        SignUp
      </Typography>
      <Grid container>
        <Formik
          initialValues={INITIAL_STATE_VALUE}
          validationSchema={FORM_VALIDATION}
          onSubmit={async (value) => {
            setLoading(true)
            if (value.password !== value.confirmPassword) {
              setRegisterFail("Password don't match")
            } else {
              const result = await AuthApiCall.Signup(value)
              if (result) {
                setIsRegistered(true)
              } else {
                setRegisterFail('Register Failed!')
              }
            }
            setLoading(false)
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth name="fullname" label="Full Name" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="email" label="Email" type="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Button fullWidth variant="contained">
                  {!loading ? (
                    'Submit'
                  ) : (
                    <CircularProgress sx={{ color: '#fff' }} />
                  )}
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Grid>
      {isRegistered ? (
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsRegistered(false)
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
      ) : registerFail ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setRegisterFail('')
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
      <Typography sx={{ my: 4 }}>
        already have an account?{' '}
        <Link href="/auth/login">
          <a>signin</a>
        </Link>
      </Typography>
    </Box>
  )
}

export default RegisterForm
