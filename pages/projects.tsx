import Layout from '@/components/Layout';
import Seo from '@/components/Layout/LayoutSeo';

const meta = {
   title: 'Projects | Reyhan Naufal Rahman',
};

export default function projects() {
   return (
      <Layout>
         <Seo title={meta.title} />
         <div className='py-20'>
            <h1 className='text-3xl font-bold'>Projects</h1>
            <p>Working now!</p>
         </div>
      </Layout>
   );
}
