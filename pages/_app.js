import { useEffect } from 'react'
import '../styles/globals.css'
import { StorePorvider } from '../utils/Store';
import Router from 'next/router'
import { useState } from 'react'
import LoadingBox from '../components/LoadingBox';

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  })

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);  
  })

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.remove(jssStyles);
    }
  }, [])


  return (
    <>
    
    <StorePorvider>
    {loading ? <LoadingBox color="white" />  :
        <Component {...pageProps} />
      }
        </StorePorvider>
  </>

  )
}

export default MyApp
