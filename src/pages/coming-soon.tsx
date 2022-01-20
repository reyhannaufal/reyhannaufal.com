import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import Link from 'next/link';

export default function ComingSoon() {
   return (
      <Layout>
         <Seo title='Coming Soon | Reyhan Naufal Rahman' />
         <div className='h-[60vh]'>
            <h1 className='font-bold text-4xl mt-20'>Coming Soon</h1>
            <p>Something awesome is coming!</p>

            <Link href='/'>
               <button className='py-2.5 bg-primary rounded-xl px-4 mt-10 text-white hover:border-2 transition-all'>
                  Back To Home
               </button>
            </Link>
         </div>
      </Layout>
   );
}
