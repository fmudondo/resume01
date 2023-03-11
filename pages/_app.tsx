
import type { AppProps } from 'next/app'
import '../styles/index.css'
import { Provider } from 'react-redux';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      < Component {...pageProps} />
    


  )

}

export default MyApp
