import type { NextPage } from 'next';

import BlogSection from '@/components/Home/BlogSection';
import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Layout/Seo';
import MainContent from '@/components/Home/MainContent';

const Home: NextPage = () => {
   return (
      <Layout>
         <Seo
            title='Home | Reyhan Naufal Rahman'
            description='Reyhan has experience of writting web apps. He has a knowledge of Javascript, Typescript and browser APIS as well as significant experience with popular libraries like React and Redux.'
         />
         <MainContent />
         <BlogSection />
      </Layout>
   );
};

export default Home;
