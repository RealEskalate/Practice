import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { getSession } from 'next-auth/react'
import LoginForm from '../../../components/mintesnot/auth/LoginForm'

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
})

const LoginPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <LoginForm />
      </Container>
    </ThemeProvider>
  )
}

export default LoginPage
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
    props: { session },
  }
}
