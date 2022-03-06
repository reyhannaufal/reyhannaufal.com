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
         <div className='h-[55vh] sm:h-full'>
            <h1 className='mt-10 text-2xl font-bold md:text-4xl'>
               Coming Soon
            </h1>
            <p className='mb-3 text-sm md:text-base'>
               Something awesome is coming!
            </p>
            <Image
               placeholder='blur'
               height={500}
               width={955}
               className='mb-5 h-[250px] w-full rounded-lg object-fill sm:h-[500px]'
               blurDataURL={image}
               src={image}
            />
            <Link href='/'>
               <button className='mt-2 rounded-xl bg-primary py-2.5 px-4 text-xs text-white transition-all hover:border-2 md:text-base'>
                  Back To Home
               </button>
            </Link>
         </div>
      </Layout>
   );
}
