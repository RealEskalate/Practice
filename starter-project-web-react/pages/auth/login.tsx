import React from 'react';
import LoginCard from "../../components/auth/LoginCard";
import RegisterCard from '../../components/auth/RegisterCard';
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

const LoginPage: React.FC = ()=>{
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <LoginCard/>
                
            </Container>
        </ThemeProvider>
    )
}

export default LoginPage; 
