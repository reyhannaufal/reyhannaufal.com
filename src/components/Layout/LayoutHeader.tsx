import React from 'react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/src/utils/classNames';

const headerList = [
   { id: '1', title: 'Home', href: '/' },
   { id: '2', title: 'Blog', href: '/blog' },
   { id: '2', title: 'Projects', href: '/projects' },
];

export default function Header() {
   const router = useRouter();
   const { pathname } = router;
   const isActiveLink = (href: string) => {
      if (href === '/projects' || href === '/blog') {
         return router.pathname.startsWith(href) ? 'active' : '';
      }
      return pathname === href ? 'active' : '';
   };

   return (
      <header className='flex items-center justify-between py-5'>
         <div className='h-7 w-7 md:h-auto md:w-auto'>
            <Link href='/'>
               <Image
                  src='/reyhan-logo.svg'
                  alt='logo'
                  width={44.17}
                  height={43.91}
               />
            </Link>
         </div>
         <div className='flex items-center space-x-4 text-xs font-medium text-gray-400 sm:text-sm'>
            {headerList.map((item) => (
               <div
                  key={item.id}
                  className={classNames(
                     'flex justify-center rounded-md px-3 py-2 hover:text-gray-300 sm:px-3',
                     isActiveLink(item.href)
                        ? 'bg-primary text-gray-100 hover:text-gray-100'
                        : ''
                  )}
               >
                  <Link href={item.href}>{item.title}</Link>
               </div>
            ))}
         </div>
      </header>
   );
}
