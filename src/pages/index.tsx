import Head from 'next/head';
import type { NextPageAuth } from './_app';

const Home: NextPageAuth = () => {

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <title>Protected page</title>
      </Head>
      <main>
        <h2 className='w-full text-center pt-8'>Protected page</h2>
      </main>
    </>
  );
};

Home.auth = true;

export default Home;
