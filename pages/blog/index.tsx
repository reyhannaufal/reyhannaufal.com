import Layout from '@/components/Layout';
import Link from 'next/link';
import { getAllPosts } from '@/utils/posts';
import Seo from '@/components/Layout/LayoutSeo';
import Image from 'next/image';

const meta = {
   title: 'Blog | Reyhan Naufal Rahman',
};

export default function Blog({ allPosts }: any) {
   return (
      <Layout>
         <Seo title={meta.title} />
         {allPosts.map((post: any) => (
            <div key={post.slug}>
               {post.new && (
                  /**
                   * Commment out for now
                   */
                  // <Link href={`/blog/${post.slug}`} key={post.slug}>
                  <Link href='coming-soon' key={post.slug}>
                     <div className='my-10'>
                        <img
                           className='rounded-lg w-full  sm:h-[500px] mb-5'
                           src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                           alt={post.title}
                        />
                        <h3 className='inline-block 2 px-4 py-2 sm:mt-8 mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm  rounded-3xl'>
                           {post.type}
                        </h3>
                        <h1 className='font-bold text-xl sm:text-4xl mt-3'>
                           {post.title}
                        </h1>
                        <p className='mt-4 text-gray-500'>{post.excerpt}</p>
                        <p className='mt-3 text-[13px] text-gray-500'>
                           {post.date}
                        </p>
                        <p className='mt-6 underline text-sm sm:text-base cursor-pointer text-gray-700'>
                           Read More
                        </p>
                     </div>
                  </Link>
               )}
            </div>
         ))}
         <h2 className='font-bold text-3xl mt-20'>All Articles</h2>
         <div className='flex flex-col sm:flex-row sm:space-x-5'>
            {allPosts.map((post: any) => (
               <div key={post.slug}>
                  {!post.new && (
                     <Link href={`/blog/${post.slug}`}>
                        <div className='my-10'>
                           <img
                              className='rounded-lg w-full sm:h-[250px] mb-5'
                              src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                              alt={post.title}
                           />
                           <h3 className='inline-block 2 px-4 py-2  mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 mt-0 md:text-sm sm:mt-8 rounded-3xl'>
                              {post.type}
                           </h3>
                           <h1 className='font-bold text-xl sm:text-2xl mt-3'>
                              {post.title}
                           </h1>
                           <p className='mt-4 text-gray-500'>{post.excerpt}</p>
                           <p className='mt-3 text-[13px] text-gray-500'>
                              {post.date}
                           </p>
                           <p className='mt-6 underline text-sm sm:text-base cursor-pointer text-gray-700'>
                              Read More
                           </p>
                        </div>
                     </Link>
                  )}
               </div>
            ))}
         </div>
      </Layout>
   );
}

export async function getStaticProps() {
   const allPosts = getAllPosts([
      'title' as never,
      'date' as never,
      'slug' as never,
      'author' as never,
      'coverImage' as never,
      'excerpt' as never,
      'type' as never,
      'new' as never,
   ]);

   return {
      props: { allPosts },
   };
}
