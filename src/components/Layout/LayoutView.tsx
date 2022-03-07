import React from 'react';
import Footer from './LayoutFooter';
import Header from './LayoutHeader';

type LayoutInterface = {
   children: React.ReactNode;
};

export default function Layout({ children }: LayoutInterface) {
   return (
      <div
         className='bg-cover bg-fixed bg-center bg-no-repeat'
         style={{
            backgroundImage: 'url(/background-layout.png)',
         }}
         key={'background'}
      >
         <div className='z-10 mx-auto max-w-md overflow-hidden px-10 sm:max-w-5xl'>
            <Header />
            {children}
            <Footer />
         </div>
      </div>
   );
}
