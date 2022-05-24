import * as React from 'react';
import Button from '@mui/material/Button';
import { useFormikContext } from 'formik'


const ButtonWrapper= ({children, ...otherProps}: {children: string})=>{
    const {submitForm} = useFormikContext()

    const handleSubmit = ()=>{
        submitForm()
    }

    const buttonProps = {
        variant: 'contained',
        fullWidth: true,
        onClick: handleSubmit,
        ...otherProps
    }

    

    return (
        <Button {...buttonProps}>{children}</Button>
    )
}


export default ButtonWrapper;