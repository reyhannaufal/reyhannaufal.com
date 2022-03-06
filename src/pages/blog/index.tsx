import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import CardView from '@/src/components/Card/CardView';
import { Post } from '@/src/constants/posts';

const meta = {
   title: 'Blog | Reyhan Naufal Rahman',
};

interface BlogViewProps {
   posts: Post[];
}

export default function Blog({ posts }: BlogViewProps) {
   return (
      <Layout>
         <Seo title={meta.title} />
         {posts.map((post: Post) => (
            <div key={post.slug}>
               {post.new && (
                  <Link href='coming-soon' key={post.slug} passHref>
                     {/* <Link href={`/blog/${post.slug}`} key={post.slug}> */}
                     <div className='my-10'>
                        <div className='mb-2 sm:mb-5'>
                           <Image
                              className='mb-5 h-[250px] w-full rounded-lg object-cover sm:h-[500px]'
                              src={post.coverImage as string}
                              placeholder='blur'
                              blurDataURL={post.coverImage}
                              height={500}
                              width={955}
                              alt={post.title}
                           />
                        </div>
                        <h3 className='2 mb-2 inline-block rounded-3xl  bg-indigo-300 px-4 py-2 text-xs font-medium text-indigo-800  md:text-sm'>
                           {post.type}
                        </h3>
                        <h1 className='mt-3 text-xl font-bold sm:text-4xl'>
                           {post.title}
                        </h1>
                        <p className='mt-4 text-gray-500'>{post.excerpt}</p>
                        <p className='mt-3 text-[13px] text-gray-500'>
                           {post.date}
                        </p>
                        <p className='mt-6 cursor-pointer text-sm text-gray-700 underline sm:text-base'>
                           Read More
                        </p>
                     </div>
                  </Link>
               )}
            </div>
         ))}
         <h2 className='mt-20 text-3xl font-bold'>All Articles</h2>
         <div className='flex flex-col sm:flex-row sm:space-x-5'>
            {posts.map((post: Post) => (
               <div key={post.slug}>
                  {!post.new && <CardView item={post} />}
               </div>
            ))}
         </div>
      </Layout>
   );
}

export async function getStaticProps() {
   const postDirectory = path.join(process.cwd(), 'src/data/posts');
   const filenames = fs.readdirSync(postDirectory, 'utf8');
   const paths = filenames.map((name) => ({
      params: { slug: name.replace('.mdx', '') },
   }));
   const posts = paths.map((p) => {
      const projectFile = fs.readFileSync(
         `${postDirectory}/${p.params.slug}.mdx`,
         'utf-8'
      );

      const { data } = matter(projectFile);

      return {
         ...data,
         slug: p?.params?.slug,
      };
   });
   return {
      props: { posts },
   };
}
