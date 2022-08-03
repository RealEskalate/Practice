import { useRouter } from 'next/router'
import { CircularProgress, Container, Box, Grid } from '@mui/material'

import Details from '../../../../components/mintesnot/blog/Details'
import { useFetchSinglBlogQuery } from '../../../../store/mintesnot/features/blog/BlogApiSlice'
const BlogDetail = () => {
  const router = useRouter()
  const { data = {}, isFetching } = useFetchSinglBlogQuery(
    router.query.id as string
  )

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          {!isFetching ? (
            <Details blog={data} />
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
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogDetail
