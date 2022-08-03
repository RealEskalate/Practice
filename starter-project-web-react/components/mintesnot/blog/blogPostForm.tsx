import React from 'react'
import { Box, Button } from '@mui/material'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import BlogPostTextField from './BlogPostTextField'

type handle = () => void
interface props {
  handleClose: handle
}
export default function BlogPostForm({ handleClose }: props) {
  const INITIAL_FORM_STATE = {
    title: '',
    content: '',
  }
  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().min(1).required(),
    content: Yup.string().required(),
  })
  return (
    <Box mb={5} mx={3}>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={() => {
          handleClose()
        }}
      >
        <Form>
          <Box py={4}>
            <BlogPostTextField name="title" otherProps={{ label: 'Title' }} />
          </Box>
          <Box pb={4}>
            <BlogPostTextField
              name="content"
              otherProps={{
                fullWidth: true,
                id: 'outlined-multiline-static',
                label: 'Content',
                multiline: true,
                rows: 4,
              }}
            />
          </Box>
          <Button type="submit" size="large" fullWidth variant="outlined">
            POST
          </Button>
        </Form>
      </Formik>
    </Box>
  )
}
