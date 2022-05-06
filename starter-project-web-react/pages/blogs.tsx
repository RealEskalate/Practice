import react, { useEffect } from 'react'
import axios from 'axios'
import { Box, Container, Grid, Typography, Divider } from '@mui/material'
import { getBlogs, loadBlogs, isBlogLoading } from '../store/slices/blogs'

const Blogs = () => {
    interface blogType {
      _id: string
      title: string
      content: string
      author: string
    }
    const isLoading = 
    useEffect(() => {
      dispatch(loadBlogs() as any)
    }, [])
    return (
      <Container>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={6} md={6} sx={{ pl: 2 }}>
            <Typography
              gutterBottom
              fontWeight="fontWeightBold"
              variant="h5"
              component="div"
            >
              Blogs
            </Typography>
          </Grid>
          <Grid item justifyContent="flex-end" xs={6} md={6} sx={{}}>
            <Grid container justifyContent="flex-end" sx={{ m: 0, p: 0 }}>
              <PostBlog />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
        </Grid>
  
        )
      </Container>
    )
  }
export default Blogs

