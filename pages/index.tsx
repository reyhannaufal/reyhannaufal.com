import type { NextPage } from 'next';

import BlogSection from '@/components/Home/BlogSection';
import Layout from '@/components/Layout/Layout';
import MainContent from '@/components/Home/MainContent';
import Seo from '@/components/Layout/Seo';

const Home: NextPage = () => {
   return (
      <Layout>
         <Seo />
         <MainContent />
         <BlogSection />
      </Layout>
   );
};

export default Home;
