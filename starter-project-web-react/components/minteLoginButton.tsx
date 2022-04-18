import Button from '@mui/material/Button';

const LoginButton = ()=>{
    const style = {
        borderRadius: 0, 
        minWidth:"200px",
        fontWeight: "bold",
        fontSize: 24,
        margin: "30px 0px",
        padding:"8px 0px"

    };
    return (
        <Button variant="contained" size="large" style={style}>Login</Button>
    )
}


export default LoginButton