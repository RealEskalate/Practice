import React from 'react';
import RegisterCard_tibebu from '../../components/auth/RegisterCard_tibebu';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react';
import LoginCard_tibebu from '../../components/auth/LoginCard_tibebu';

const theme = createTheme({
    typography:{
        fontFamily:"Poppins",
        fontSize: 14,
    }
})

const LoginPage: React.FC = ()=>{

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <LoginCard_tibebu />            
            </Container>
        </ThemeProvider>
    )
}



export default LoginPage; 


export async function getServerSideProps(context:any) {
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
      props: { session }
    }
  }