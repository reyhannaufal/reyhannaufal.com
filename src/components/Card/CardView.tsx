import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/src/constants/posts';

type CardViewProps = {
   item: Post;
   isProjectCard?: boolean;
};

export default function CardView({ item, isProjectCard }: CardViewProps) {
   const slug = isProjectCard ? `projects/${item.slug}` : `coming-soon`;
   return (
      <>
         <Link href={slug} key={item.slug} passHref>
            <div className='my-10 max-w-[500px]'>
               <div className='mb-2 md:mb-5'>
                  <Image
                     placeholder='blur'
                     width={450}
                     height={250}
                     blurDataURL={item.coverImage}
                     className='rounded-lg object-cover md:h-[250px] md:object-fill'
                     src={item.coverImage as string}
                     alt={item.title}
                  />
               </div>
               <h3 className='mb-2  inline-block rounded-3xl  bg-indigo-300 px-4 py-2 text-xs font-medium text-indigo-800 sm:mt-0 md:text-sm'>
                  {item.type}
               </h3>
               <h1 className='mt-3 text-xl font-bold sm:text-2xl'>
                  {item.title}
               </h1>
               <p className='mt-4 text-sm text-gray-500 sm:text-base'>
                  {item.excerpt}
               </p>
               <p className='mt-3 text-xs text-gray-400 sm:text-[13px]'>
                  {item.date}
               </p>
               <p className='mt-6 cursor-pointer text-sm text-gray-700 underline sm:text-base'>
                  Read More
               </p>
            </div>
         </Link>
      </>
   );
}
