import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SessionProvider } from "next-auth/react"

import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
let store = undefined
  store = useStore(pageProps.initialReduxState)
  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  )
  }
export default MyApp

