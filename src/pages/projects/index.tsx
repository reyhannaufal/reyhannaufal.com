import React from 'react';

import CardView from '@/components/Card/CardView';
import Layout from '@/components/Layout';
import Seo from '@/components/Layout/LayoutSeo';
import { Project } from '@/constants/projects';
import { getAllLocalDataFiles } from '@/utils/localData';

const meta = {
   title: 'Projects | Reyhan Naufal Rahman',
};

interface ProjectsViewProps {
   projects: Project[];
}

export default function Projects({ projects }: ProjectsViewProps) {
   return (
      <Layout>
         <Seo title={meta.title} />
         <div className='pb-15 pt-10 lg:min-h-screen'>
            <h1 className='text-3xl font-bold'>Projects</h1>
            <p className='text-base font-normal'>
               Some cool projects that I have worked on!
            </p>
            <div className='flex flex-col sm:flex-row sm:space-x-5'>
               {projects.map((project: Project, id: number) => (
                  <div key={id}>
                     <CardView item={project} isProjectCard />
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   );
}

export async function getStaticProps() {
   const projects = getAllLocalDataFiles('projects');
   return {
      props: { projects },
   };
}
