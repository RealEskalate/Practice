import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { SessionProvider } from "next-auth/react"
import { wrapper } from '../store/configureStore'

function MyApp({ Component, pageProps }: AppProps) {
  return (
          <SessionProvider session={pageProps.session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
  )
}

export default wrapper.withRedux(MyApp)
