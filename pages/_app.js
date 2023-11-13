import '../styles/globals.css';
import Head from 'next/head';
import ReactGA from 'react-ga';

ReactGA.initialize('G-463LQBV470');


function App({ Component, pageProps }) {
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
