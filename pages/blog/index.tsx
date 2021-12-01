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
                  <Link href={`/blog/${post.slug}`} key={post.slug}>
                     <div className='my-10'>
                        <img
                           className='rounded-lg w-full h-[250px] sm:h-[500px] mb-5'
                           src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                           alt={post.title}
                        />
                        <h3 className='inline-block 2 px-4 py-2 mt-8 mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm sm:mt-0 rounded-3xl'>
                           {post.type}
                        </h3>
                        <h1 className='font-bold text-4xl mt-3'>
                           {post.title}
                        </h1>
                        <p className='mt-4 text-gray-400'>{post.excerpt}</p>
                        <p className='mt-3 underline cursor-pointer text-gray-700'>
                           Read More
                        </p>
                     </div>
                  </Link>
               )}
            </div>
         ))}
         <div className='flex flex-col sm:flex-row sm:space-x-5'>
            {allPosts.map((post: any) => (
               <div key={post.slug}>
                  {!post.new && (
                     <Link href={`/blog/${post.slug}`}>
                        <div className='my-10'>
                           <img
                              className='rounded-lg w-full h-[250px] mb-5'
                              src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                              alt={post.title}
                           />
                           <h3 className='inline-block 2 px-4 py-2 mt-8 mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm sm:mt-0 rounded-3xl'>
                              {post.type}
                           </h3>
                           <h1 className='font-bold text-2xl mt-3'>
                              {post.title}
                           </h1>
                           <p className='mt-4 text-gray-400'>{post.excerpt}</p>
                           <p className='mt-3 underline cursor-pointer text-gray-7 00'>
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
