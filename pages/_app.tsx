import type { AppProps } from 'next/app'
import Provider from 'components/Provider';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps}/>
    </Provider>
  )
}
export default MyApp
