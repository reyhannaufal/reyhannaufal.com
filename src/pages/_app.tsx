import React from 'react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useProgressStore } from '@/src/hooks/useProgressStore';

import '@/src/styles/globals.css';
import { Progress } from '@/src/components/Progress';

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();

   const setIsAnimating = useProgressStore<any>(
      (state: any) => state?.setIsAnimating
   );
   const isAnimating = useProgressStore((state: any) => state?.isAnimating);

   const handleLoadingScreen = () => {
      const handleStart = () => {
         setIsAnimating(true);
      };
      const handleStop = () => {
         setIsAnimating(false);
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
      handleLoadingScreen();
   }, [router]);

   return (
      <>
         <Progress isAnimating={isAnimating} />
         <Component {...pageProps} />
      </>
   );
}
export default MyApp;
