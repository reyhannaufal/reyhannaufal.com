import Layout from '@/components/Layout';
import Seo from '@/components/Layout/LayoutSeo';
import ProjectsView from '@/routes/Projects/ProjectsView';

const meta = {
   title: 'Projects | Reyhan Naufal Rahman',
};

export default function projects() {
   return (
      <Layout>
         <Seo title={meta.title} />
         <ProjectsView />
      </Layout>
   );
}
