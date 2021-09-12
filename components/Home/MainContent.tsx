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

/* eslint-disable react/no-unescaped-entities */
export default function MainContent() {
   return (
      <section className='flex flex-col-reverse items-center py-10 lg:flex-row'>
         <div className='max-w-lg text-center lg:text-left'>
            <div className='space-y-1 md:space-y-2'>
               <p className='mt-2 text-sm font-bold lg:mt-0'>Hey, I'm</p>
               <h1 className='max-w-[300px] md:max-w-[500px] lg:max-w-sm mx-auto lg:mx-0 text-2xl md:text-3xl font-bold   lg:text-4xl text-primary'>
                  Reyhan Naufal Rahman
               </h1>
               <h2 className='text-lg font-bold md:text-2xl text-secondary'>
                  Frontend Engineer
               </h2>
               <p className='text-base font-normal text-coolGray'>
                  Reyhan has experience of writting web apps. He has a knowledge
                  of Javascript, Typescript and browser APIS as well as
                  significant experience with popular libraries like React and
                  Redux.{' '}
               </p>
            </div>
            <div className='flex justify-center mx-auto mt-8 space-x-6 lg:justify-start'>
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
                  height={441.64}
                  width={519}
                  alt='laptop-illusrations'
               />
            </div>
         </div>
      </section>
   );
}
