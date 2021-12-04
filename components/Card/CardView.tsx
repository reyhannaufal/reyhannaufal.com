import Link from 'next/link';

type CardViewProps = {
   item: {
      slug: string;
      title: string;
      type: string;
      image: string;
      excerpt: string;
      date: string;
      coverImage: string;
   };
   isProjectCard?: boolean;
};

export default function CardView({ item, isProjectCard }: CardViewProps) {
   const slug = isProjectCard ? `/projects/${item.slug}` : `/blog/${item.slug}`;
   return (
      <>
         <Link href={slug} key={item.slug}>
            <div className='my-10'>
               <img
                  className='rounded-lg w-full h-[250px] mb-5 object-cover'
                  src={item.coverImage}
                  alt={item.title}
               />
               <h3 className='inline-block 2 px-4 py-2  mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm sm:mt-0 rounded-3xl'>
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
