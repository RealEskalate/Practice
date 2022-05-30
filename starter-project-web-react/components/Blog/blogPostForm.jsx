import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import BlogPostTextField from  './blogPostTextField'
import { addBlog , getBlogs} from '../../store/slices/blogs'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
export default function BlogPostForm({
  handleClose
}) {
  const dispatch = useDispatch()
  const d = useSelector((state)=> getBlogs(state))

  const INITIAL_FORM_STATE ={
    title:"",
    content:''

  }
  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().min(3).required(),
    content: Yup.string().required()
  })
  return (

    <Box mb={5} mx={3}>
      <Formik
      initialValues={{
        ...INITIAL_FORM_STATE
      }}
      validationSchema = {FORM_VALIDATION}
      onSubmit = {
        values => {

          dispatch(addBlog({...values, author:'Jhon', id :d.length}))
          handleClose()

        }
        
      }
      >
        <Form>
        <Box py={4} >
          <BlogPostTextField   name="title" label="Title"  />
        </Box>
        <Box pb={4} >
          <BlogPostTextField
            fullWidth
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={4}
            name = 'content'
          />
        </Box>
        <Button type='submit' size='large'  fullWidth variant="outlined">
          Post
        </Button>
        
      </Form>
      </Formik>
    </Box>
  )
}