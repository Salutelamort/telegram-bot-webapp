import type { AppProps } from 'next/app'
import { NavigationProvider } from '../components/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <Component {...pageProps} />
    </NavigationProvider>
  )
}

export default MyApp