import React from 'react';
import Image from 'next/image';

import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import markdownToHtml from '@/src/utils/markDownToHtml';
import { getAllMdxFiles, getMdxFileBySlug } from '@/src/utils/mdx';
import markdownStyles from './markdown-content.module.css';
import { Post } from '@/src/constants/posts';

interface BlogBySlugViewProps {
   post: Post;
}

export default function BlogBySlug({ post }: BlogBySlugViewProps) {
   return (
      <>
         <Seo title={`Blog | ${post.title}`} />
         <Layout>
            <h1 className='font-bold text-xl sm:text-3xl mt-7'>{post.title}</h1>
            <div className='flex text-xs sm:text-base mt-2 mb-4 space-x-2 text-gray-500'>
               <p>{post?.author?.name}</p>
               <p>-</p>
               <p>{post.date}</p>
            </div>
            <Image
               className='rounded-lg w-full h-[250px] object-cover sm:h-[500px]'
               src={post.coverImage as string}
               placeholder='blur'
               blurDataURL={post.coverImage}
               height={500}
               width={955}
               alt={post.title}
            />
            <div
               className={markdownStyles['markdown']}
               dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
            />
         </Layout>
      </>
   );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
   const postFields = [
      'slug',
      'title',
      'date',
      'author',
      'content',
      'ogImage',
      'coverImage',
   ];
   const post: Post = getMdxFileBySlug(
      params.slug,
      postFields as [],
      'src/data/posts'
   );
   const content = await markdownToHtml(post.content || '');

   return {
      props: {
         post: {
            ...post,
            content,
         },
      },
   };
}

export async function getStaticPaths() {
   const posts = getAllMdxFiles(['slug'] as never, 'src/data/posts');

   return {
      paths: posts.map((post: Post) => {
         return {
            params: {
               slug: post.slug,
            },
         };
      }),
      fallback: false,
   };
}
