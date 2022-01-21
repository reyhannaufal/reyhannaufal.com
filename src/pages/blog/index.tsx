import Link from 'next/link';
import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import CardView from '@/src/components/Card/CardView';
import { getAllMdxFiles } from '@/src/utils/mdx';

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
                  <Link href='coming-soon' key={post.slug}>
                     {/* <Link href={`/blog/${post.slug}`} key={post.slug}> */}
                     <div className='my-10'>
                        <img
                           className='rounded-lg w-full h-[250px] object-cover sm:h-[500px] mb-5'
                           src={post.coverImage}
                           alt={post.title}
                        />
                        <h3 className='inline-block 2 px-4 py-2  mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm  rounded-3xl'>
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
                  {!post.new && <CardView item={post} />}
               </div>
            ))}
         </div>
      </Layout>
   );
}

export async function getStaticProps() {
   const allPosts = getAllMdxFiles(
      [
         'title',
         'date',
         'slug',
         'author',
         'coverImage',
         'excerpt',
         'type',
         'new',
      ] as never,
      'src/data/posts'
   );

   return {
      props: { allPosts },
   };
}