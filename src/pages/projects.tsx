import { getAllProjects } from '@/src/utils/projects';
import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import ProjectsView from '@/src/routes/Projects/ProjectsView';

const meta = {
   title: 'Projects | Reyhan Naufal Rahman',
};

export default function projects({ allProjects }: any) {
   return (
      <Layout>
         <Seo title={meta.title} />
         <ProjectsView allProjects={allProjects} />
      </Layout>
   );
}

export async function getStaticProps() {
   const allProjects = getAllProjects([
      'title' as never,
      'date' as never,
      'slug' as never,
      'author' as never,
      'coverImage' as never,
      'excerpt' as never,
      'type' as never,
   ]);

   return {
      props: { allProjects },
   };
}
