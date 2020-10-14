import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Head from 'next/head'

import theme from '../theme'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Good Impact Framework</title>
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
