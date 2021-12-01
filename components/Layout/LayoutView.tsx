import React from 'react';
import Footer from './LayoutFooter';
import Header from './LayoutHeader';

type LayoutInterface = {
   children: React.ReactNode;
};

export default function Layout({ children }: LayoutInterface) {
   return (
      <div className='max-w-md px-10 mx-auto sm:max-w-5xl'>
         <Header />
         {children}
         <Footer />
      </div>
   );
}
