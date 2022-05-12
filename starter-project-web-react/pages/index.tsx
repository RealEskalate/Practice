import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import LoginPage from './auth/login';
import Bloglist from './blogs';
import Layout from '../components/Layout';
import { useSelector, useStore } from 'react-redux';
import { useRouter } from 'next/router'




const Home: NextPage = () => {
  const [status, setStatus] = useState(false);
  const store: any = useStore();
  const router = useRouter()
  const authentication = useSelector((state: ReturnType<typeof store.getState>)=> state.entities.authentication);


  useEffect(()=>{    
    if(!authentication.user){
      router.push('/auth/login')
    }
  },[store,router]);
  


  return (
    <div className={styles.container}>
      <Bloglist/>
    </div>

  )
}

export default Home
