import react, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Comments from '../../../components/blog/Comments'
import Details from '../../../components/blog/Details'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleBlog, loadSingleBlog } from '../../../store/slices/blogs'
import { getSession } from 'next-auth/react'
import UpdatePasswordCard from '../../../components/auth/UpdatePasswordCard'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'


const UpdatePasswordDetail = () => {
    const theme = createTheme({
        typography:{
            fontFamily:"Poppins",
            fontSize: 14,
        }
    })

    const router = useRouter()
    console.log(router.query.id)


  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
            <UpdatePasswordCard id={router.query.id}/>            
        </Container>
    </ThemeProvider>
  )
}

export default UpdatePasswordDetail



