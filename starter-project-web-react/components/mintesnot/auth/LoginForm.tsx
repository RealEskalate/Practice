import { useState } from 'react'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'
import TwitterIcon from '@mui/icons-material/Twitter'
import { signIn } from 'next-auth/react'
import { useFormik } from 'formik'
import {
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material'
import * as yup from 'yup'

interface FormValue {
  email: string
  password: string
}
const INITIAL_STATE_VALUE = { email: '', password: '' }
const LoginForm = () => {
  const [loading, setLoading] = useState(false)

  const FORM_VALIDATION = yup.object().shape({
    email: yup.string().required('Required').email('Invalid'),
    password: yup.string().min(8).required('Required'),
  })
  const formik = useFormik({
    initialValues: INITIAL_STATE_VALUE,
    validationSchema: FORM_VALIDATION,
    onSubmit: (value: FormValue) => {
      setLoading(true)
      signIn('credentials', {
        callbackUrl: `${window.location.origin}/mintesnot/`,
        email: value.email,
        password: value.password,
      })
    },
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
        SignIn
      </Typography>
      <Grid container>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button fullWidth variant="contained" type="submit">
                {!loading ? (
                  'Submit'
                ) : (
                  <CircularProgress sx={{ color: '#fff' }} />
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid container spacing={14} sx={{ mx: 'auto', pt: 5 }}>
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
      <Typography sx={{ my: 4 }}>
        You don&apos;t have account?{' '}
        <Link href="/auth/register">
          <a>register</a>
        </Link>
      </Typography>
    </Box>
  )
}

export default LoginForm
