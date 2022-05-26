import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useStore } from '../store/configureStore'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react";
// import { wrapper } from '../store/configureStore'

function MyApp({ Component, pageProps }: AppProps) {
  let store = undefined
  store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionProvider>
        </Provider>
  )
}

export default MyApp

