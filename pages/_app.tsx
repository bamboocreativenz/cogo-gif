import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Head from 'next/head'
import Modal from 'react-modal'

import theme from '../theme'

export default function App ({ Component, pageProps }) {
  Modal.setAppElement('#__next')

  return (
    <>
      <Head>
        <title>Good Impact Framework</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta property='og:title' content='Good Impact Framework' />
        <meta
          property='og:image'
          content='https://dl.airtable.com/.attachments/364a912fae9459884690e00ab8ce64ef/34f3377f/200702_QV_Auckland_636-4--shop.jpg'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Global
        styles={theme => ({
          '*': {
            boxSizing: 'border-box'
          },
          'html, body, #__next': {
            height: '100%',
            width: '100%',
            margin: 0
          }
        })}
      />
    </>
  )
}
