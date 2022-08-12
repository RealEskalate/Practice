import React from 'react'
import RegisterForm from '../../../components/mintesnot/auth/RegisterForm'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { getSession } from 'next-auth/react'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
})

const RegisterPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <RegisterForm />
      </Container>
    </ThemeProvider>
  )
}

export default RegisterPage
export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {},
  }
}
