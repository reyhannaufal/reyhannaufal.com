import Layout from '@/src/components/Layout';
import Seo from '@/src/components/Layout/LayoutSeo';
import markdownToHtml from '@/src/utils/markDownToHtml';
import {
   getAllMdxFiles,
   getMdxFileBySlug,
   getMdxFilesSlug,
} from '@/src/utils/mdx';
import markdownStyles from './markdown-content.module.css';

export type Post = {
   slug?: string;
   title?: string;
   content?: string;
   createdAt?: string;
   date?: string;
   coverImage?: string;
   author?: any;
};

export default function Posts({ post }: { post: Post }) {
   return (
      <>
         <Seo title={`Projects | ${post.title}`} />
         <Layout>
            <h1 className='font-bold text-xl sm:text-3xl mt-7'>{post.title}</h1>
            <div className='flex text-xs sm:text-base mt-2 mb-4 space-x-2 text-gray-500'>
               <p>{post.author.name}</p>
               <p>-</p>
               <p>{post.date}</p>
            </div>
            <img
               src={post.coverImage}
               alt={post.title}
               className='w-full h-[400px] rounded-lg object-cover mb-10'
            />
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

   const post: Post = getMdxFileBySlug(
      params.slug,
      postFields as any,
      'src/data/projects'
   );
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
   const posts = getAllMdxFiles(['slug'] as never, 'src/data/projects');

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