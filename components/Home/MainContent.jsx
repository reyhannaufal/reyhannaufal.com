import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default function MainContent() {
   return (
      <section className='flex flex-col-reverse items-center py-10 lg:flex-row'>
         <div className='max-w-lg space-y-1 text-center md:space-y-2 lg:text-left'>
            <p className='mt-2 text-sm font-bold lg:mt-0'>Hey, I'm</p>
            <h1 className='max-w-[300px] md:max-w-[500px] lg:max-w-sm mx-auto lg:mx-0 text-2xl md:text-3xl font-bold   lg:text-4xl text-primary'>
               Reyhan Naufal Rahman
            </h1>
            <h2 className='text-lg font-bold md:text-2xl text-secondary'>
               Frontend Engineer
            </h2>
            <p className='text-base font-normal text-coolGray'>
               Reyhan has experience of writting web apps. He has a knowledge of
               Javascript, Typescript and browser APIS as well as significant
               experience with popular libraries like React and Redux.{' '}
            </p>
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
