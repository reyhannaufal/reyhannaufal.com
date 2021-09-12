import Image from 'next/image';
import Link from 'next/link';

const headerList = [
   { id: '1', title: 'Home', href: '/' },
   { id: '2', title: 'About', href: '/about' },
];

export default function Header() {
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
         <div className='grid items-center grid-cols-2 space-x-4 text-sm font-medium text-gray-400 md:text-base lg:grid-cols-3'>
            {headerList.map((item) => (
               <a key={item.id} className='hover:text-gray-300'>
                  <Link href={item.href}>{item.title}</Link>
               </a>
            ))}
         </div>
      </header>
   );
}
