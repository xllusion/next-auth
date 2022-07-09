import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <title>Non-protected page</title>
      </Head>
      <main>
        <h2 className='w-full text-center pt-8'>Non-protected page</h2>
      </main>
    </>
  );
};

export default Contact;