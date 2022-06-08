import type { NextPage } from 'next'
import Bloglist from './blogs'
import { getSession } from 'next-auth/react'
import axios from 'axios'

const Home: NextPage = () => {
  return <Bloglist />
}
export default Home
export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  } else {
  }
  return {
    props: { session },
  }
}
