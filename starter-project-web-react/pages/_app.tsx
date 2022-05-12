import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { useStore } from '../store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps }: AppProps) {
  let {store, persistor} = useStore(pageProps.initialReduxState)
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </PersistGate>

      </Provider>
  )
}

export default MyApp
