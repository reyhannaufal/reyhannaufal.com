import React from 'react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useProgressStore } from '@/src/hooks/useProgressStore';

import '@/src/styles/globals.css';
import { Progress } from '@/src/components/Progress';

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const setIsAnimating = useProgressStore<any>(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (state: any) => state?.setIsAnimating
   );
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const isAnimating = useProgressStore((state: any) => state?.isAnimating);

   const handleLoadingScreen = () => {
      const handleStart = () => {
         setIsAnimating(true);
      };
      const handleStop = () => {
         setIsAnimating(false);
      };

      const handleRouteChange = () => {
         router.events.on('routeChangeStart', handleStart);
         router.events.on('routeChangeComplete', handleStop);
         router.events.on('routeChangeError', handleStop);
      };

      handleRouteChange();

      return () => {
         handleRouteChange();
      };
   };

   useEffect(() => {
      handleLoadingScreen();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [router]);

   return (
      <>
         <Progress isAnimating={isAnimating} />
         <Component {...pageProps} />
      </>
   );
}
export default MyApp;
