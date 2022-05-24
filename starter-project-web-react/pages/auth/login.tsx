import React from 'react';
import LoginCard from "../../components/auth/LoginCard";
import RegisterCard from '../../components/auth/RegisterCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react';

const theme = createTheme({
    palette:{
        primary: {
            main: "#4caf50",
            contrastText: "#fff"
        },
    },
    typography:{
        fontFamily:"Poppins",
        fontSize: 14,
    }
})

const LoginPage: React.FC = ()=>{

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <LoginCard />
                
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