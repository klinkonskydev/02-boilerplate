import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icont-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="manifest.json" />
        <meta
          name="description"
          content="A simple project to show places I want to go"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
