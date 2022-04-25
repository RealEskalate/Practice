import React from 'react';
<<<<<<< HEAD
import LoginCard from "../../components/auth/LoginCard";
import RegisterCard from '../../components/auth/RegisterCard';
=======
import LoginCard from "../../components/auth/minteLoginCard";
import RegisterCard from '../../components/auth/minteRegisterCard';
>>>>>>> a049cfc ([WEB] Finish first phase of auth)
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

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

const RegisterPage: React.FC = ()=>{
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                
                <RegisterCard/>
            </Container>
        </ThemeProvider>
    )
}

export default RegisterPage; 