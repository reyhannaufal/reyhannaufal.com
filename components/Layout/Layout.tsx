import React from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutInterface = {
   children: React.ReactNode;
};

export default function Layout({ children }: LayoutInterface) {
   return (
      <div className='max-w-sm px-10 mx-auto sm:max-w-6xl'>
         <Header />
         {children}
         <Footer />
      </div>
   );
}
