import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
interface props {
  name:string,
  otherProps:any
}
export default function BlogPostTextField({
    name,
    otherProps
}:props) {
    const [field, mata]:any = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    error:false,
    helperText :"",
    id:'fullwidth'
  };
  // (configTextfield)
  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }
  return (
  
        <TextField {...configTextfield} />

  )
}