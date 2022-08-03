import react from 'react'
import { Box, Container, Grid, Typography, Divider } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { useFetchBlogsQuery } from '../../store/mintesnot/blog/BlogApiSlice'
import PostBlog from '../../components/mintesnot/blog/PostBlogButton'
import BlogCard from '../../components/mintesnot/blog/BlogCard'

const Blogs = () => {
  const { data = [], isFetching } = useFetchBlogsQuery()

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

      {isFetching ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ display: 'flex', mt: 5 }}
        >
          <CircularProgress size="40%" sx={{ m: 5, p: 6 }} />
        </Box>
      ) : (
        <Box
          sx={{ width: '100%', ml: 0, px: 0 }}
          display="inline-block"
          alignItems="center"
          justifyContent="center"
        >
          {data.map((blog: any) => {
            return <BlogCard blog={blog} key={blog._id} />
          })}
        </Box>
      )}
    </Container>
  )
}

export default Blogs
