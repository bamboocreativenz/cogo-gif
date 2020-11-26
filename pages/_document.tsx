import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
            rel='stylesheet'
          />
          <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
          <meta
            name='description'
            content='Learn about the Good Impact Framework.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
