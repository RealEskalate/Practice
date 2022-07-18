import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import BlogPostTextField from './blogPostTextField'
import { addBlog, getBlogs } from '../../store/slices/blogs'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useSession } from "next-auth/react"
import { AppDispatch, RootState } from "../../store/configureStore";
// import { TurnedInNotOutlined } from '@mui/icons-material';
// import { any } from 'cypress/types/bluebird';

type handle = () => void;
interface props {
  handleClose: handle
}
export default function BlogPostForm({
  handleClose
}: props) {
  const { data }: any = useSession()
  const dispatch = useDispatch()
  const d = useSelector((state) => getBlogs(state as any))

  const INITIAL_FORM_STATE = {
    title: "",
    content: ''

  }
  const FORM_VALIDATION = Yup.object().shape({
    title: Yup.string().min(1).required(),
    content: Yup.string().required()
  })
  return (
 
    <Box mb={5} mx={3}>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={
          values => {
            // console.log(values)
            dispatch(addBlog({ ...values }, data.access_token) as any)
            handleClose()
          }

        }
      >
        <Form>
          <Box py={4} >
            <BlogPostTextField name="title" otherProps={{ label: "Title" }} />
          </Box>
          <Box pb={4} >
            <BlogPostTextField
              name='content'
              otherProps={{
                fullWidth:true,
                id: "outlined-multiline-static",
                label: "Content",
                multiline:true,
                rows: 4
              }}
            />
          </Box>
          <Button type='submit' size='large' fullWidth variant="outlined">
            POST
          </Button>

        </Form>
      </Formik>
    </Box>
  )
}