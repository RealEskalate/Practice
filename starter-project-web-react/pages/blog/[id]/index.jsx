import { useRouter } from "next/router"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Comments from "../../../components/blog/Comments";
import Details from "../../../components/blog/Details";

const BlogDetail = () => {
  const router = useRouter()
  const { id } = router.query
  const blog = {
    id: router.query.id,
    title: "Trial title for a blog",
    created_at: "Jan 1, 2022",
    author: "This guy",
    img: "/img/trial-img.jpg",
    content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
    quasi quidem quibusdam.`
  }
  return (
    <Container sx={{mt: 5}} mt={5}>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Details blog={blog}/>
        </Grid>
        <Grid item xs={4}>
          <Comments blog={blog}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogDetail