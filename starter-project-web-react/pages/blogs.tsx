import * as React from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import { getBlogs } from '../store/slices/blogs';
import { useSelector } from 'react-redux';
import BlogCard from "../components/Blog/blogCard";
import PostBlog from '../components/Blog/postBlogButton';
import Link from 'next/link';
const Blogs = () => {
  interface blogType {
    id: number,
    title: string,
    content: string,
    author: string
  }
  const blogs = useSelector((state:any) => getBlogs(state))
  return (

    <Container   >
      <Grid container spacing={2} sx={{ mt: 4, }} >
        <Grid item xs={6} md={6} sx={{ pl: 2 }}>
          <Typography gutterBottom fontWeight="fontWeightBold" variant="h5" component="div">
            Blogs
          </Typography>
        </Grid>
        <Grid item justifyContent="flex-end" xs={6} md={6} sx={{  }}>
          <Grid container justifyContent="flex-end" sx={{ m:0, p:0 }}>
            <PostBlog />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" />
        </Grid>
      </Grid>
      

      <Box sx={{ width: "100%", ml: 0, px: 0 }}
        display="inline-block"
        alignItems="center"
        justifyContent="center">

        {blogs.map((blog: blogType) => (
          <BlogCard  {...blog} key={blog.id} />
        ))

        }
      </Box>
    </Container>
  );
}

export default Blogs;