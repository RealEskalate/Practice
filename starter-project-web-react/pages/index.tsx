import type { NextPage } from 'next'
import Bloglist from './blogs'
import { getSession } from 'next-auth/react'
import axios from 'axios'

const Home: NextPage = () => {
  return <Bloglist />
}
export default Home

