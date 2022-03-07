import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Layout from '@/components/Layout';
import Seo from '@/components/Layout/LayoutSeo';

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
            <h1 className='mt-7 text-xl font-bold sm:text-3xl'>
               {frontMatter?.title}
            </h1>
            <div className='mt-2 mb-4 flex space-x-2 text-xs text-gray-500 sm:text-base'>
               <p>{frontMatter?.author?.name}</p>
               <p>-</p>
               <p>{frontMatter?.date}</p>
            </div>
            <Image
               className='h-[350px] w-full object-cover sm:h-[500px]'
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
