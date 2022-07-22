import react, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography, Divider } from '@mui/material'
import { getBlogs, loadBlogs, isBlogLoading } from '../store/slices/blogs'
import { useSelector, useDispatch } from 'react-redux'
import BlogCard from '../components/Blog/blogCard'
import PostBlog from '../components/Blog/postBlogButton'
import CircularProgress from '@mui/material/CircularProgress'
import { getSession } from 'next-auth/react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

const Blogs = () => {
  interface blogType {
    _id: string
    title: string
    content: string
    author: string
  }
  const dispatch = useDispatch()
  const blogs = useSelector((state: any) => getBlogs(state))
  const isLoading = useSelector((state: any) => isBlogLoading(state))
  useEffect(() => {
    dispatch(loadBlogs() as any)
  }, [])

  const [pageNumber, setPageNumber] = useState(0)
  const blogsPerPage = 5
  const pagesVisited = pageNumber * blogsPerPage

  const displayBlogs = blogs
    .slice(pagesVisited, pagesVisited+blogsPerPage)
    .map((blog: any) => {
      return (
        <BlogCard blog={blog} key={blog._id} />
      )
    })

  const pageCount = Math.ceil(blogs.length/blogsPerPage)

  const changePage = (event: { selected: react.SetStateAction<number> }) => {
    setPageNumber(event.selected)
  }
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

      {isLoading ? (
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
          {displayBlogs}
          <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Box>
      )}
    </Container>
  )
}

export default Blogs
export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }
  return {
    props: { session },
  }
}
