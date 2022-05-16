import React from 'react';
import ProfileCard from "../components/profile/ProfileCard";
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
            <Container>
                <ProfileCard/>
                
            </Container>
        </ThemeProvider>
    )
}

export default LoginPage; 

