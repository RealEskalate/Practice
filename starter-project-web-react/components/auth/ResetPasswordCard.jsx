import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import TwitterIcon from '@mui/icons-material/Twitter'
import { signIn } from 'next-auth/react'
import { Grid } from '@mui/material'
import * as yup from 'yup'
import { Formik, Form } from 'formik'
import TextField from './TextField'
import Button from './AuthButton'
import CircularProgress from '@mui/material/CircularProgress'
import AuthApiCall from '../../util/AuthApiCall'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const ResetPasswordCard = () => {
  const [INITIAL_STATE_VALUE, setValue] = useState({
    email: '',
  })

  const [loading, setLoading] = useState(false)
  const [userExists, setUserExists] = useState(false)
  const [emailCheckFailed, setEmailCheckFailed] = useState(false)

  const FORM_VALIDATION = yup.object().shape({
    email: yup.string().required('Required').email('Invalid'),
  })

  return (
    <Box
      sx={{
        mt: 4,
        px: 4,
        boxShadow: 3,
        textAlign: 'center',
        minHeight: '80vh',
      }}
    >
      <Typography sx={{ my: 1 }} variant="h3">
        Reset Password
      </Typography>
      <Typography sx={{ my: 4 }}>
        Please enter your email 
      </Typography>
      <Grid container>
        <Formik
          initialValues={INITIAL_STATE_VALUE}
          validationSchema={FORM_VALIDATION}
          onSubmit={async (value) => {
            setLoading(true)
            const result = await AuthApiCall.ResetPassword(value.email)
            console.log(result)
            if (result){
              setUserExists(true)
              console.log(result._id)
              function RedirectToUpdatePasswordPage() {
                window.location.replace(`http://localhost:3000/UpdatePassword/${result._id}`)
              }
              const redirectToUpdatePasswordPage = setTimeout(RedirectToUpdatePasswordPage, 5000)
            }
            else{
              setEmailCheckFailed(true)
            }
            setLoading(false)
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name="email" label="Email" type="email" />
              </Grid>
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Button>
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
      {userExists ? (
        <Alert
        name="successAlert"
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
        <AlertTitle>Redirecting you to update password page . . .</AlertTitle>
        
      </Alert>
      ) : emailCheckFailed? (
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
          <strong>Email doesn't exist</strong>
        </Alert>
      ): (
        ""
      )}
      
    </Box>
  )
}

export default ResetPasswordCard
