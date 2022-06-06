import React from 'react'
import ProfileCard from '../components/profile/ProfileCard'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { getSession } from 'next-auth/react'
import axios from 'axios'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
  },
})

const LoginPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ProfileCard />
      </Container>
    </ThemeProvider>
  )
}

export default LoginPage
export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }
  return {
    props: { session },
  }
}
