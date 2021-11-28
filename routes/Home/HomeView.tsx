import Image from 'next/image';

import {
   SiJavascript,
   SiNextDotJs,
   SiReact,
   SiRedux,
   SiTypescript,
} from 'react-icons/si';

const stackStyles = {
   styles:
      'w-7 h-7 text-primary hover:text-secondary hover:scale transition  ease-in-out transform hover:-translate-y-1 hover:scale-110',
};

export default function HomeView({ posts }: any) {
   console.log('%cHomeView.tsx line:17 post', 'color: #007acc;', posts);
   return (
      <>
         <section className='flex flex-col-reverse items-center py-4 sm:py-14 lg:flex-row'>
            <div className='max-w-lg text-left'>
               <div className='space-y-1 md:space-y-2'>
                  <p className='mt-2 text-sm font-bold lg:mt-0'>Hey, I'm</p>
                  <h1 className='max-w-[300px] md:max-w-[500px] lg:max-w-sm  text-left lg:mx-0 text-2xl md:text-3xl font-bold  lg:text-4xl text-primary'>
                     Reyhan Naufal Rahman
                  </h1>
                  <h2 className='text-lg font-bold md:text-2xl text-secondary'>
                     Frontend Engineer
                  </h2>
                  <p className='text-base font-normal text-coolGray'>
                     Reyhan has experience of writting web apps. He has a
                     knowledge of Javascript, Typescript and browser APIS as
                     well as significant experience with popular libraries like
                     React and Redux.{' '}
                  </p>
               </div>
               <div className='flex justify-start mx-auto mt-8 space-x-6'>
                  <SiJavascript className={stackStyles.styles} />
                  <SiTypescript className={stackStyles.styles} />
                  <SiReact className={stackStyles.styles} />
                  <SiNextDotJs className={stackStyles.styles} />
                  <SiRedux className={stackStyles.styles} />
               </div>
            </div>
            <div className='mx-auto mt-20 lg:mt-0'>
               <div className='w-52 h-52 md:h-72 md:w-72 lg:h-auto lg:w-auto'>
                  <Image
                     src='/laptop-illustrations.svg'
                     placeholder='blur'
                     height={441.64}
                     width={519}
                     alt='laptop-illusrations'
                     blurDataURL='/laptop-illustrations.svg'
                  />
               </div>
            </div>
         </section>
         <section className='pt-10 pb-5 '>
            <div className='mt-20 space-y-1 text-center lg:mt-10 lg:text-left'>
               <h1 className='text-3xl font-bold lg:text-4xl text-primary'>
                  The Blog
               </h1>
               <p className='text-base font-normal'>Some notes made by me</p>
            </div>

            <div className='mt-8'>
               {posts?.map((i: any) => (
                  <div
                     key={i}
                     className='flex flex-col items-center p-10 border-[3px] sm:flex-row gap-x-32 rounded-xl mt-3'
                  >
                     <div>
                        <Image
                           src='/laptop-illustrations.svg'
                           placeholder='blur'
                           blurDataURL='/laptop-illustrations.svg'
                           height={189}
                           width={222}
                           alt='blog post'
                        />
                     </div>
                     <div className='sm:space-y-2'>
                        <h3 className='inline-block px-4 py-2 mt-8 mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm sm:mt-0 rounded-3xl'>
                           {i.title}
                        </h3>
                        <h2 className='text-lg font-bold sm:text-xl'>
                           {i.title}
                        </h2>
                        <p className='text-sm sm:text-base text-coolGray'>
                           {i.description}
                        </p>
                        <div className='mt-5 text-sm sm:mt-0'>
                           <p className='font-medium text-gray-900 '>Bekasi</p>
                           <p className='font-normal text-gray-500 '>
                              {new Date(i.date).toLocaleDateString()} · 6 min
                              read
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
}
