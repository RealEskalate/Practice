import * as React from 'react'
import Button from '@mui/material/Button'
import { useFormikContext } from 'formik'

const ButtonWrapper = ({ children, fullWidth = true, ...otherProps }) => {
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  const buttonProps = {
    variant: 'contained',
    fullWidth,
    onClick: handleSubmit,
    ...otherProps,
  }

  return <Button {...buttonProps}>{children}</Button>
}

export default ButtonWrapper
