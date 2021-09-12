import Head from 'next/head';
import { useRouter } from 'next/router';

type SeoProps = {
   title: string;
   description?: string;
   image?: string;
   date?: string;
};

export default function Seo({
   title,
   description,
   image,
   date,
   ...props
}: SeoProps) {
   const router = useRouter();
   const meta = {
      title: 'Home | Reyhan Naufal Rahman',
      description:
         'Reyhan has experience of writting web apps. He has a knowledge of Javascript, Typescript and browser APIS as well as significant experience with popular libraries like React and Redux.',
      image: 'https://schematics.its.ac.id/favicon/large-og.png',
      type: 'website',
      robots: 'follow, index',
      ...props,
   };

   return (
      <Head>
         <title>{title}</title>
         <meta name='robots' content={meta.robots} />
         <meta content={description} name='description' />
         <meta
            property='og:url'
            content={`https://schematics.its.ac.id${router.asPath}`}
         />
         <link
            rel='canonical'
            href={`https://schematics.its.ac.id${router.asPath}`}
         />
         {/* Open Graph */}
         <meta property='og:type' content={meta.type} />
         <meta property='og:site_name' content='Schematics ITS' />
         <meta property='og:description' content={description} />
         <meta property='og:title' content={title} />
         <meta name='image' property='og:image' content={image} />
         {/* Twitter */}
         <meta name='twitter:card' content='summary_large_image' />
         <meta name='twitter:site' content='@schematics_its' />
         <meta name='twitter:title' content={title} />
         <meta name='twitter:description' content={description} />
         <meta name='twitter:image' content={image} />

         <link
            rel='canonical'
            href={`https://schematics.its.ac.id${router.asPath}`}
         />

         <link rel='preconnect' href='https://fonts.googleapis.com' />
         <link rel='preconnect' href='https://fonts.gstatic.com' />
         <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
         />
      </Head>
   );
}
