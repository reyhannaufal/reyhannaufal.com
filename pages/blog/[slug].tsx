import React from 'react';
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import Layout from '@/components/Layout';
import Seo from '@/components/Layout/LayoutSeo';
import { serialize } from 'next-mdx-remote/serialize';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogBySlugViewProps {
   source: MDXRemoteSerializeResult<Record<string, unknown>>;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   frontMatter: { [k: string]: any };
}

export default function BlogBySlug({
   source,
   frontMatter,
}: BlogBySlugViewProps) {
   return (
      <>
         <Seo title={`Blog | ${frontMatter?.title}`} />
         <Layout>
            <h1 className='mt-7 text-xl font-bold sm:text-3xl'>
               {frontMatter?.title}
            </h1>
            <div className='mt-2 mb-4 flex space-x-2 text-xs text-gray-500 sm:text-base'>
               <p>{frontMatter?.author?.name}</p>
               <p>-</p>
               <p>{frontMatter?.date}</p>
            </div>
            <Image
               className='h-[250px] w-full rounded-lg object-cover sm:h-[500px]'
               src={frontMatter?.coverImage as string}
               placeholder='blur'
               blurDataURL={frontMatter?.coverImage}
               height={500}
               width={955}
               alt={frontMatter?.title}
            />
            <section className='prose pt-10 prose-h2:text-lg lg:prose-h2:text-2xl'>
               <MDXRemote {...source} />
            </section>
         </Layout>
      </>
   );
}

export function getStaticPaths() {
   const blogsDirectory = path.join(process.cwd(), '/data/posts');
   const filenames = fs.readdirSync(blogsDirectory);
   const paths = filenames.map((name) => ({
      params: { slug: name.replace('.mdx', '') },
   }));
   return { paths, fallback: false };
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
   const blogsPath = path.join(
      process.cwd(),
      '/data/posts',
      `${params.slug}.mdx`
   );
   const blogSource = fs.readFileSync(blogsPath, 'utf8');
   const { content, data } = matter(blogSource);
   const mdxSource = await serialize(content);
   return { props: { source: mdxSource, frontMatter: data } };
}
