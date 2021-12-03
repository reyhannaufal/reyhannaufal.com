import Layout from '@/components/Layout';
import Seo from '@/components/Layout/LayoutSeo';
import markdownToHtml from '@/utils/markDownToHtml';
import { getAllPosts, getPostBySlug } from '@/utils/posts';
import { getAllProjects, getProjectBySlug } from '@/utils/projects';
import markdownStyles from './markdown-content.module.css';


export type Post = {
   slug?: string;
   title?: string;
   content?: string;
   createdAt?: string;
   date?: string;
};

export default function Posts({ post }: { post: Post }) {
   return (
      <>
         <Seo title={`Projects | ${post.title}`} />
         <Layout>
            <h1 className='font-bold text-xl sm:text-3xl my-7 max-w-sm'>{post.title}</h1>
            <div
               className={markdownStyles['markdown']}
               dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
            />
         </Layout>
      </>
   );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
   const postFields = [
      'slug',
      'title',
      'date',
      'author',
      'content',
      'ogImage',
      'coverImage',
   ];
   const post: Post = getProjectBySlug(params.slug, postFields as any);
   const content = await markdownToHtml(post.content || '');

   return {
      props: {
         post: {
            ...post,
            content,
         },
      },
   };
}

export async function getStaticPaths() {
   const posts = getAllProjects(['slug'] as never);

   return {
      paths: posts.map((post: any) => {
         return {
            params: {
               slug: post.slug,
            },
         };
      }),
      fallback: false,
   };
}
