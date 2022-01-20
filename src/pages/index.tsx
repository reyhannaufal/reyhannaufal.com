import type { NextPage } from 'next';

import { getAllProjects } from '@/src/utils/projects';
import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import HomeView from '@/src/routes/Home/HomeView';

const Home: NextPage = ({ allPosts }: any) => {
   return (
      <Layout>
         <Seo />
         <HomeView posts={allPosts} />
      </Layout>
   );
};

export async function getStaticProps() {
   const allPosts = getAllProjects([
      'title' as never,
      'date' as never,
      'slug' as never,
      'author' as never,
      'coverImage' as never,
      'excerpt' as never,
      'type' as never,
   ]);

   return {
      props: { allPosts },
   };
}

export default Home;
