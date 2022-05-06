import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import LoginPage from './auth/login';
import Bloglist from './blogs';
import Layout from '../components/Layout';
import { useStore } from 'react-redux';
import { useRouter } from 'next/router'




const Home: NextPage = () => {
  const [status, setStatus] = useState(false);
  const store: any = useStore();
  const router = useRouter()

  useEffect(()=>{
    
    if(!store.getState().entities.authentication.isLogin){
      router.push('/auth/login')
    }
  },[store,router]);
  


  return (
    <div className={styles.container}>
      <Layout> <Bloglist/> </Layout>
    </div>

  )
}

export default Home
