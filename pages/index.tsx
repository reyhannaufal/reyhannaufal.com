import type { NextPage } from 'next';

import BlogSection from '@/components/Home/BlogSection';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Layout/Seo';
import MainContent from '@/components/Home/MainContent';

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
