import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
export default function BlogPostTextField({
    name,
    ...otherPorps
}) {
    const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherPorps,
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