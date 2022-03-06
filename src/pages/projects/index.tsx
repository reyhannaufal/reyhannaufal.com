import React from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import CardView from '@/src/components/Card/CardView';
import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import { Project } from '@/src/constants/projects';

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
         <div className='pt-10 pb-15'>
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
