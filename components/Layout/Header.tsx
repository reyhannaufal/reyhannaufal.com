import Image from 'next/image';
import Link from 'next/link';

const headerList = [
   { id: '1', title: 'Home', href: '/' },
   { id: '2', title: 'Projects', href: '/projects' },
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
         <div className='grid items-center grid-cols-2 space-x-4 text-xs font-medium text-gray-400 sm:text-sm lg:grid-cols-3'>
            {headerList.map((item) => (
               <a
                  key={item.id}
                  className='flex justify-center  sm:px-[14px] py-2 rounded-md hover:text-gray-300 first-of-type:bg-primary first-of-type:text-gray-100'
               >
                  <Link href={item.href}>{item.title}</Link>
               </a>
            ))}
         </div>
      </header>
   );
}
