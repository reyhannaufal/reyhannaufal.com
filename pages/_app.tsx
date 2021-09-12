import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@/styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();

   const HandleLoadingScreen = () => {
      const handleStart = () => {
         console.log('Loading');
      };
      const handleStop = () => {
         console.log('stop');
      };

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleStop);
      router.events.on('routeChangeError', handleStop);

      return () => {
         router.events.off('routeChangeStart', handleStart);
         router.events.off('routeChangeComplete', handleStop);
         router.events.off('routeChangeError', handleStop);
      };
   };

   useEffect(() => {
      HandleLoadingScreen();
   }, [router]);

   return <Component {...pageProps} />;
}
export default MyApp;
