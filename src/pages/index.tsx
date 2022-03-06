import React from 'react';
import Image from 'next/image';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { SiJavascript, SiReact, SiRedux, SiTypescript } from 'react-icons/si';

import CardView from '@/src/components/Card/CardView';
import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import { Project } from '../constants/projects';

const stackStyles = {
   styles:
      'w-7 h-7 text-primary hover:text-secondary hover:scale transition  ease-in-out transform hover:-translate-y-1 hover:scale-110',
};

interface HomeViewProps {
   projects: Project[];
}

const Home = ({ projects }: HomeViewProps) => (
   <Layout>
      <Seo />
      <section className='flex flex-col-reverse items-center py-4 sm:py-14 lg:flex-row'>
         <div className='max-w-lg text-left'>
            <div className='space-y-1 md:space-y-2'>
               <p className='mt-2 text-sm font-bold lg:mt-0'>Hey, I&apos;m</p>
               <h1 className='max-w-[300px] text-left text-2xl  font-bold text-primary md:max-w-[500px] md:text-3xl lg:mx-0  lg:max-w-sm lg:text-4xl'>
                  Reyhan Naufal Rahman
               </h1>
               <h2 className='text-lg font-bold text-secondary md:text-2xl'>
                  Software Engineer
               </h2>
               <p className='text-base font-normal text-coolGray'>
                  Reyhan has experience of writting web apps. He has a knowledge
                  of Javascript, Typescript and browser APIS as well as
                  significant experience with popular libraries like React and
                  Redux.{' '}
               </p>
            </div>
            <div className='mx-auto mt-8 flex justify-start space-x-6'>
               <SiJavascript className={stackStyles.styles} />
               <SiTypescript className={stackStyles.styles} />
               <SiReact className={stackStyles.styles} />
               <SiRedux className={stackStyles.styles} />
            </div>
         </div>
         <div className='mx-auto mt-20 lg:mt-0'>
            <div className='h-52 w-52 md:h-72 md:w-72 lg:h-auto lg:w-auto'>
               <Image
                  src='/laptop-illustrations.svg'
                  placeholder='blur'
                  height={441.64}
                  width={519}
                  alt='laptop-illusrations'
                  blurDataURL='/laptop-illustrations.svg'
               />
            </div>
         </div>
      </section>

      <section className='pt-10 pb-5 '>
         <div className='mt-20 space-y-1  text-left lg:mt-10'>
            <h1 className='text-3xl font-bold text-primary lg:text-4xl'>
               Notable Projects
            </h1>
            <p className='text-base font-normal'>
               Some cool projects that I have worked on!
            </p>
         </div>

         <div className='flex flex-col items-center sm:space-x-5 md:flex-row'>
            {projects?.map((item: Project, id: number) => (
               <CardView item={item} key={id} isProjectCard />
            ))}
         </div>
      </section>
   </Layout>
);

export async function getStaticProps() {
   const projectsDirectory = path.join(process.cwd(), 'src/data/projects');
   const filenames = fs.readdirSync(projectsDirectory, 'utf8');
   const paths = filenames.map((name) => ({
      params: { slug: name.replace('.mdx', '') },
   }));
   const projects = paths.map((p) => {
      const projectFile = fs.readFileSync(
         `${projectsDirectory}/${p.params.slug}.mdx`,
         'utf-8'
      );

      const { data } = matter(projectFile);

      return {
         ...data,
         slug: p?.params?.slug,
      };
   });
   return {
      props: { projects },
   };
}

export default Home;
