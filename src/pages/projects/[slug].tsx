import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';

export interface ProjectBySlugViewProps {
   source: MDXRemoteSerializeResult<Record<string, unknown>>;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   frontMatter: { [k: string]: any };
}

export default function ProjectBySlug({
   source,
   frontMatter,
}: ProjectBySlugViewProps) {
   return (
      <>
         <Seo title={`Projects | ${frontMatter?.title}`} />
         <Layout>
            <h1 className='font-bold text-xl sm:text-3xl mt-7'>
               {frontMatter?.title}
            </h1>
            <div className='flex text-xs sm:text-base mt-2 mb-4 space-x-2 text-gray-500'>
               <p>{frontMatter?.author?.name}</p>
               <p>-</p>
               <p>{frontMatter?.date}</p>
            </div>
            <Image
               className='w-full h-[350px] object-cover sm:h-[500px]'
               src={frontMatter?.coverImage as string}
               placeholder='blur'
               blurDataURL={frontMatter?.coverImage}
               height={500}
               width={955}
               alt={frontMatter?.title}
            />
            <section className='prose'>
               <MDXRemote {...source} />
            </section>
         </Layout>
      </>
   );
}

export async function getStaticPaths() {
   const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
   const filenames = fs.readdirSync(projectsDirectory);
   const paths = filenames.map((name) => ({
      params: { slug: name.replace('.mdx', '') },
   }));
   return { paths, fallback: false };
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
   const projectsPath = path.join(
      process.cwd(),
      'src/data/projects',
      `${params.slug}.mdx`
   );
   const projectsSource = fs.readFileSync(projectsPath, 'utf8');
   const { content, data } = matter(projectsSource);
   const mdxSource = await serialize(content);
   return { props: { source: mdxSource, frontMatter: data } };
}
