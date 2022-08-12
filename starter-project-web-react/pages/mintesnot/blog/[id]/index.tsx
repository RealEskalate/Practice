import { useRouter } from 'next/router'
import { CircularProgress, Container, Box, Grid } from '@mui/material'
import { Blog } from '../../../../types/Blog'
import Details from '../../../../components/mintesnot/blog/Details'
import { useFetchSinglBlogQuery } from '../../../../store/mintesnot/blog/BlogApiSlice'
import Comments from '../../../../components/mintesnot/blog/Comments'
const BlogDetail = () => {
  const router = useRouter()
  const id = router.query.id as string
  const { data = {} as Blog, isFetching } = useFetchSinglBlogQuery(id)

  return (
    <>
      {!isFetching ? (
        <Container sx={{ mt: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Details {...data} />
            </Grid>
            <Grid item xs={4}>
              <Comments id={id} />
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ display: 'flex', mt: 5 }}
        >
          <CircularProgress size="40%" sx={{ m: 5, p: 6 }} />
        </Box>
      )}
    </>
  )
}

export default BlogDetail
