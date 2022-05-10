import React from 'react'
import axios from 'axios'
import ProfileCard from '../components/profile/ProfileCard'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { getSession } from 'next-auth/react'

const theme = createTheme({
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

