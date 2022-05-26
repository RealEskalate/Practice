import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { useStore } from '../store/configureStore'
import { Provider } from 'react-redux'
function MyApp({ Component, pageProps }: AppProps) {
  let store = undefined
  store = useStore(pageProps.initialReduxState)
  return (

    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}

export default MyApp

