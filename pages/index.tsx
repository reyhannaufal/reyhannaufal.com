import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import HomeView from '@/routes/Home/HomeView';
import Seo from '@/components/Layout/LayoutSeo';
import { getAllPosts } from '@/utils/posts';

const Home: NextPage = ({ allPosts }: any) => {
   console.log(allPosts);
   return (
      <Layout>
         <Seo />
         <HomeView posts={allPosts} />
      </Layout>
   );
};

export async function getStaticProps() {
   const allPosts = getAllPosts([
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
