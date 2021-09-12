import { useRouter } from 'next/router';

import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '@/utils/classNames';

const headerList = [
   { id: '1', title: 'Home', href: '/' },
   { id: '2', title: 'Projects', href: '/projects' },
];

export default function Header() {
   const router = useRouter();
   const isActiveLink = (href: string) => {
      return router.pathname === href ? 'active' : '';
   };

   return (
      <header className='flex items-center justify-between py-5'>
         <div className='w-7 md:h-auto md:w-auto h-7'>
            <Image
               src='/reyhan-logo.svg'
               alt='logo'
               width={44.17}
               height={43.91}
            />
         </div>
         <div className='flex items-center space-x-4 text-xs font-medium text-gray-400 sm:text-sm'>
            {headerList.map((item) => (
               <div
                  key={item.id}
                  className={classNames(
                     'flex justify-center px-3 sm:px-5 py-2 rounded-md hover:text-gray-300',
                     isActiveLink(item.href)
                        ? 'text-gray-100 bg-primary hover:text-gray-100'
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
