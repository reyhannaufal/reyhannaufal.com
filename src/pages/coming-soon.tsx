import React from 'react';
import Image from 'next/image';
import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import Link from 'next/link';

export default function ComingSoon() {
   const image =
      'https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1823&q=80';
   return (
      <Layout>
         <Seo title='Coming Soon | Reyhan Naufal Rahman' />
         <div>
            <h1 className='font-bold text-3xl md:text-4xl mt-10'>
               Coming Soon
            </h1>
            <p className='text-sm md:text-base mb-3'>
               Something awesome is coming!
            </p>
            <Image
               placeholder='blur'
               height={500}
               width={955}
               className='rounded-lg w-full h-[250px] object-fill sm:h-[500px] mb-5'
               blurDataURL={image}
               src={image}
            />
            <Link href='/'>
               <button className='py-2.5 text-xs md:text-base bg-primary rounded-xl px-4 mt-2 text-white hover:border-2 transition-all'>
                  Back To Home
               </button>
            </Link>
         </div>
      </Layout>
   );
}
