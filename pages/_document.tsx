import { Head, Html, Main, NextScript } from 'next/document'

const Document: React.FC = () => (
  <Html lang='en-US'>
    <Head>
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
        rel='stylesheet'
      />
    </Head>

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
