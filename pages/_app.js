import '../styles/globals.css';
import Head from 'next/head';
import ReactGA from 'react-ga';


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio - Clémentine Mory</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
