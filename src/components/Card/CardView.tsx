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
         <Link href={slug} key={item.slug}>
            <div className='my-10 max-w-[500px]'>
               <div className='mb-2 md:mb-5'>
                  <Image
                     placeholder='blur'
                     width={450}
                     height={250}
                     blurDataURL={item.coverImage}
                     className='rounded-lg md:h-[250px] object-cover md:object-fill'
                     src={item.coverImage as string}
                     alt={item.title}
                  />
               </div>
               <h3 className='inline-block  px-4 py-2  mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm sm:mt-0 rounded-3xl'>
                  {item.type}
               </h3>
               <h1 className='font-bold text-xl sm:text-2xl mt-3'>
                  {item.title}
               </h1>
               <p className='mt-4 text-gray-500 text-sm sm:text-base'>
                  {item.excerpt}
               </p>
               <p className='mt-3 text-xs sm:text-[13px] text-gray-400'>
                  {item.date}
               </p>
               <p className='mt-6 underline text-sm sm:text-base cursor-pointer text-gray-700'>
                  Read More
               </p>
            </div>
         </Link>
      </>
   );
}
