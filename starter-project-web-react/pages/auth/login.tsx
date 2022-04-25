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
<<<<<<< HEAD
=======
        
>>>>>>> a049cfc ([WEB] Finish first phase of auth)
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

<<<<<<< HEAD
export default LoginPage; 
=======
export default LoginPage; 
>>>>>>> a049cfc ([WEB] Finish first phase of auth)
