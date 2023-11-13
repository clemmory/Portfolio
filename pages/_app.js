import '../styles/globals.css';
import Head from 'next/head';
import ReactGA from 'react-ga';


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio Clémentine Mory</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href='/public/icon_portfolio.png'/>
        <meta name='description' content="Clémentine Mory is a web and mobile developer based in Valencia, Spain."/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
