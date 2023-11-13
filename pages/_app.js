import '../styles/globals.css';
import Head from 'next/head';
import ReactGA from 'reacr-ga'

function App({ Component, pageProps }) {

  ReactGA.initialize('G-463LQBV470');
  
  return (
    <>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
