import Head from 'next/head';
import { useRouter } from 'next/router';

type SeoProps = {
   title?: string;
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
      image: 'https://www.reyhannaufal.com/reyhan-logo.svg',
      type: 'website',
      robots: 'follow, index',
      baseUrl: 'https://www.reyhannaufal.com',
      ...props,
   };

   return (
      <Head>
         <title>{title || meta.title}</title>
         <meta name='robots' content={meta.robots} />
         <meta content={description || meta.description} name='description' />
         <meta property='og:url' content={`${meta.baseUrl}${router.asPath}`} />
         <link rel='canonical' href={`${meta.baseUrl}${router.asPath}`} />
         {/* Open Graph */}
         <meta property='og:type' content={meta.type} />
         <meta
            property='og:site_name'
            content={`${router.asPath} | Reyhan Naufal Rahman`}
         />
         <meta property='og:description' content={description} />
         <meta property='og:title' content={title} />
         <meta name='image' property='og:image' content={image || meta.image} />
         {/* Twitter */}
         <meta name='twitter:card' content='summary_large_image' />
         <meta
            name='twitter:site'
            content={`${router.asPath} | Reyhan Naufal Rahman`}
         />
         <meta name='twitter:title' content={title} />
         <meta name='twitter:description' content={description} />
         <meta name='twitter:image' content={image || meta.image} />

         {/* Favicon */}
         <link rel='icon' type='image/png' href='/reyhan-logo.svg' />

         <link rel='canonical' href={`${meta.baseUrl}${router.asPath}`} />

         <link rel='preconnect' href='https://fonts.googleapis.com' />
         <link rel='preconnect' href='https://fonts.gstatic.com' />
         <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
         />

         <script async src='https://cdn.splitbee.io/sb.js' />
      </Head>
   );
}
