import React from 'react';
import ResetPasswordCard from "../../components/auth/ResetPasswordCard";
import RegisterCard from '../../components/auth/RegisterCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react';

const theme = createTheme({
    typography:{
        fontFamily:"Poppins",
        fontSize: 14,
    }
})

const ResetPassword: React.FC = ()=>{

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <ResetPasswordCard />            
            </Container>
        </ThemeProvider>
    )
}



export default ResetPassword; 


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