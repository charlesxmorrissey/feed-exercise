import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link href='/favicon.ico' rel='icon' />
      <meta content='Feed exercise.' name='description' />
      <meta
        content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0'
        name='viewport'
      />
      <title>Feed exercise</title>
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
