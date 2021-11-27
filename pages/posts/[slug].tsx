import Layout from '@/components/Layout';
import markdownToHtml from '@/utils/markDownToHtml';
import { getAllPosts, getPostBySlug } from '@/utils/posts';

export type Post = {
   slug?: string;
   title?: string;
   content?: string;
   createdAt?: string;
   date?: string;
};

export default function Posts({ post }: { post: Post }) {
   return (
      <Layout>
         <p>{post.title}</p>
         <div
            className='space-y-4 mt-5'
            dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
         />
      </Layout>
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
   const post: Post = getPostBySlug(params.slug, postFields as any);
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
   const posts = getAllPosts(['slug']);

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
