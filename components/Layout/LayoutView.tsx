import React from 'react';
import Footer from './LayoutFooter';
import Header from './LayoutHeader';

type LayoutInterface = {
   children: React.ReactNode;
};

export default function Layout({ children }: LayoutInterface) {
   return (
      <div
      className='bg-fixed bg-cover bg-center bg-no-repeat'
         style={{
            backgroundImage: 'url(/background-layout.png)',
         }}
      >
         <div className='max-w-md px-10 mx-auto sm:max-w-5xl overflow-hidden z-10'>
            <Header />
            {children}
            <Footer />
         </div>
      </div>
   );
}
