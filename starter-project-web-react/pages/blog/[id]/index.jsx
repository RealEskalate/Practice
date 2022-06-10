import react, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Comments from '../../../components/blog/Comments'
import Details from '../../../components/blog/Details'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleBlog, loadSingleBlog } from '../../../store/slices/blogs'
import { getSession } from 'next-auth/react'

const BlogDetail = ({ id }) => {
  const blog = useSelector((state) => getSingleBlog(state))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadSingleBlog(id))
  }, [])

  return (
    <Container sx={{ mt: 5 }} mt={5}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Details blog={blog} />
        </Grid>
        <Grid item xs={4}>
          <Comments blog={blog} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogDetail

export async function getServerSideProps(context) {
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
