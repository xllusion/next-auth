import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { NextComponentType, NextPage, NextPageContext } from 'next';
import Navbar from '../components/navigation/Navbar';

export type NextPageAuth<P = {}, IP = P> = NextPage<P, IP> & {
  auth?: boolean;
};

type AppPropsAuth<P = {}> = AppProps<P> & {
  Component: NextPageAuth;
};

function MyApp({ Component, pageProps }: AppPropsAuth) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Navbar />
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

const Auth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600'></div>
      </div>
    );
  }

  return children;
};

export default MyApp;
