import React from 'react'
import { Alert, AlertTitle, Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCreatePostMutation } from '../../../store/mintesnot/blog/BlogApiSlice'
import { useSession } from 'next-auth/react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

type handle = () => void
interface props {
  handleClose: handle
}
interface FormValue {
  title: string
  content: string
}
export default function BlogPostForm({ handleClose }: props) {
  const INITIAL_FORM_STATE = {
    title: '',
    description: '',
    content: '',
  }
  const [createPost, { isSuccess, isError, data, error }] =
    useCreatePostMutation()
  const { data: session } = useSession()
  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().min(1).required(),
    description: Yup.string().required(),
    content: Yup.string().required(),
  })
  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: (value: FormValue) => {
      const token = session?.access_token as string
      createPost({ token, body: value })
    },
  })
  return (
    <Box mb={5} mx={3}>
      {isSuccess ? (
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClose()
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Success</AlertTitle>
          <strong>Blog Successfully Created!</strong>
        </Alert>
      ) : (
        <></>
      )}
      {isError ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClose()
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Failed</AlertTitle>
          <strong>Failed to create blog!</strong>
        </Alert>
      ) : (
        <></>
      )}
      <form onSubmit={formik.handleSubmit}>
        <Box py={2}>
          <TextField
            name="title"
            label="Title"
            fullWidth
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Box>
        <Box py={2}>
          <TextField
            name="description"
            label="Description"
            fullWidth
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Box>
        <Box pb={4}>
          <TextField
            name="content"
            label="Content"
            fullWidth
            multiline
            rows={4}
            id="outlined-multiline-static"
            value={formik.values.content}
            onChange={formik.handleChange}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
          />
        </Box>
        <Button type="submit" size="large" fullWidth variant="outlined">
          POST
        </Button>
      </form>
    </Box>
  )
}
