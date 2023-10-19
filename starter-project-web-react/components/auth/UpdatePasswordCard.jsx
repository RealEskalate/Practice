import * as React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import LocationOn from '@mui/icons-material/LocationOn'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import { Alert, AlertTitle, CardHeader, CircularProgress } from '@mui/material'
import TextField from '../auth/TextField'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { useSession } from 'next-auth/react'
import { Form, Formik } from 'formik'
import Button from '../auth/AuthButton'
import AuthApiCall from '../../util/AuthApiCall'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/router'

const  UpdatePasswordCard = (props) => {
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lIiwic3ViIjoiNjI3ZGYyOTMyNzdjMmI3N2UxMTAwYzA1IiwiaWF0IjoxNjUyODU5NTk4LCJleHAiOjE2NTI4NjMxOTh9.5caBB9L_dlAJtV4k_0vTiUi7KL-l1zUMpAuQ9SlPFDI'
    const [INITIAL_STATE, setValue] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    console.log(props.id)
  useEffect( () => {
    const userDetail = async () =>{
        const session = await AuthApiCall.GetUserDetail(props.id, access_token)
        setValue({
            firstname: session?.user?.name?.split(' ')[0],
            lastname: session?.user?.name?.split(' ')[1],
            email: session?.user?.email,
            password: '',
            confirmPassword: '',
          })
    }
    userDetail()
}, [])
  
  


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
            <TextField name="firstname" label="First Name"  readOnly='readonly' />
            </Grid>
            <Grid>
            <TextField name="lastname" label="Last Name" readOnly='readonly' />
            </Grid>
            <Grid>
            <TextField name="email" label="Email" readOnly='readonly' />
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
            <Button sx={{ fullWidth: false, width: 'auto' }}>
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
    {isUpdated ? (
    <Alert
        name="successAlert"
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
    </Box>
    
    
  )
}

export default UpdatePasswordCard
