import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import App from 'next/app';

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
       <Component {...pageProps} />
  </Layout>
  )
}


export default MyApp
