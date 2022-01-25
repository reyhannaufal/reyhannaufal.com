import React from 'react';
import Image from 'next/image';
import {
   SiJavascript,
   SiNextDotJs,
   SiReact,
   SiRedux,
   SiTypescript,
} from 'react-icons/si';

import CardView from '@/src/components/Card/CardView';
import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import { getAllMdxFiles } from '../utils/mdx';
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
               <h1 className='max-w-[300px] md:max-w-[500px] lg:max-w-sm  text-left lg:mx-0 text-2xl md:text-3xl font-bold  lg:text-4xl text-primary'>
                  Reyhan Naufal Rahman
               </h1>
               <h2 className='text-lg font-bold md:text-2xl text-secondary'>
                  Frontend Engineer
               </h2>
               <p className='text-base font-normal text-coolGray'>
                  Reyhan has experience of writting web apps. He has a knowledge
                  of Javascript, Typescript and browser APIS as well as
                  significant experience with popular libraries like React and
                  Redux.{' '}
               </p>
            </div>
            <div className='flex justify-start mx-auto mt-8 space-x-6'>
               <SiJavascript className={stackStyles.styles} />
               <SiTypescript className={stackStyles.styles} />
               <SiReact className={stackStyles.styles} />
               <SiNextDotJs className={stackStyles.styles} />
               <SiRedux className={stackStyles.styles} />
            </div>
         </div>
         <div className='mx-auto mt-20 lg:mt-0'>
            <div className='w-52 h-52 md:h-72 md:w-72 lg:h-auto lg:w-auto'>
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
         <div className='mt-20 space-y-1  lg:mt-10 text-left'>
            <h1 className='text-3xl font-bold lg:text-4xl text-primary'>
               Notable Projects
            </h1>
            <p className='text-base font-normal'>
               Some cool projects that I have worked on!
            </p>
         </div>

         <div className='flex flex-col md:flex-row sm:space-x-5 items-center'>
            {projects?.map((item: Project, id: number) => (
               <CardView item={item} key={id} isProjectCard />
            ))}
         </div>
      </section>
   </Layout>
);

export async function getStaticProps() {
   const projects = getAllMdxFiles(
      [
         'title',
         'date',
         'slug',
         'author',
         'coverImage',
         'excerpt',
         'type',
      ] as never,
      'src/data/projects'
   );

   return {
      props: { projects },
   };
}

export default Home;
