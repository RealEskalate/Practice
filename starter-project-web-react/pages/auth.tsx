import LoginCard from "../components/minteLoginCard";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {green } from '@mui/material/colors';
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

const AuthPage = ()=>{
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <LoginCard/>
            </Container>
        </ThemeProvider>
    )
}

export default AuthPage 

