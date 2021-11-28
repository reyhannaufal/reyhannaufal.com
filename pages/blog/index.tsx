import Layout from '@/components/Layout';
import Link from 'next/link';
import { getAllPosts } from '@/utils/posts';
import Seo from '@/components/Layout/LayoutSeo';

const meta = {
   title: 'Blog | Reyhan Naufal Rahman',
};

export default function Blog({ allPosts }: any) {
   return (
      <Layout>
         <Seo title={meta.title} />
         {allPosts.map((post: any) => (
            <div key={post.slug}>
               <Link href={`blog/${post.slug}`}>{post.title}</Link>
            </div>
         ))}
      </Layout>
   );
}

export async function getStaticProps() {
   const allPosts = getAllPosts([
      'title' as never,
      'date' as never,
      'slug' as never,
      'author' as never,
      'coverImage' as never,
      'excerpt' as never,
   ]);

   return {
      props: { allPosts },
   };
}
