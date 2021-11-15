import type { NextPage } from 'next';

import Layout from '@/components/Layout';
import HomeView from '@/routes/Home/HomeView';
import Seo from '@/components/Layout/LayoutSeo';

const Home: NextPage = () => {
   return (
      <Layout>
         <Seo />
         <HomeView />
      </Layout>
   );
};

export default Home;
