import Layout from '@/components/Layout';
import Seo from '@/components/Layout/LayoutSeo';
import ProjectsView from '@/routes/Projects/ProjectsView';
import { getAllProjects } from '@/utils/projects';

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
