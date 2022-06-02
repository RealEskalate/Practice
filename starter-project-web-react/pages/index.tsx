import type { NextPage } from 'next'
import Bloglist from './blogs';
import { getSession } from "next-auth/react"
import axios from 'axios';

const Home: NextPage = () => {
  return (   
    <Bloglist/>
)
}
export default Home
export async function getServerSideProps(context:any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }else{
    try {
      const res = await axios.get(
        `${process.env.API_BASE_URL}/user/${session.id}`,
        {headers: { "Authorization": "Bearer " + session.access_token}})

      if(res.status === 200){
        session.user = {name: res.data.fullName, email: res.data.email} 
      }

    } catch (error: any) {
      console.log(error.message)
    }
  }
  return {
    props: { session }
  }
}