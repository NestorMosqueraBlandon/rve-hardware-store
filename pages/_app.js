import { useEffect } from 'react'
import '../styles/globals.css'
import { StorePorvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles){
      jssStyles.parentElement.remove(jssStyles);
    }
  }, [])
  return <StorePorvider> <Component {...pageProps} /> </StorePorvider>
}

export default MyApp
