import * as React from 'react';
import Button from '@mui/material/Button';

interface Props{
    text: String,
    ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AuthButton: React.FC<Props> = ({text,ClickHandler})=>{
    const style = {
        borderRadius: 0, 
        minWidth:"200px",
        fontWeight: "bold",
        fontSize: 24,
        margin: "30px 0px",
        padding:"8px 0px"

    };

    

    return (
        <Button 
            variant="contained" 
            size="large" 
            style={style} 
            onClick={ClickHandler}
            >{text}</Button>
    )
}


export default AuthButton;