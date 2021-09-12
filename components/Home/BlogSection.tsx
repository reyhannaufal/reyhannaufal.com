import Image from 'next/image';

export default function BlogSection() {
   return (
      <section className='pt-10 pb-5 '>
         <div className='mt-20 space-y-1 text-center lg:mt-10 lg:text-left'>
            <h1 className='text-3xl font-bold lg:text-4xl text-primary'>
               The Blog
            </h1>
            <p className='text-base font-normal'>Some notes made by me</p>
         </div>

         <div className='mt-8'>
            {[0, 1, 2].map((i) => (
               <div
                  key={i}
                  className='flex flex-col items-center p-10 border-[3px] sm:flex-row gap-x-32 rounded-xl mt-3'
               >
                  <div>
                     <Image
                        src='/laptop-illustrations.svg'
                        height={189}
                        width={222}
                        alt='blog post'
                     />
                  </div>
                  <div className='sm:space-y-2'>
                     <h3 className='inline-block px-5 py-2 mt-8 mb-2 text-sm font-medium text-indigo-800 bg-indigo-300 sm:mt-0 rounded-3xl'>
                        Javascript
                     </h3>
                     <h2 className='text-lg font-bold sm:text-xl'>
                        Javascript Styleguide
                     </h2>
                     <p className='text-sm sm:text-base text-coolGray'>
                        Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                        volutpat massa dictumst amet. Sapien tortor lacus arcu.
                     </p>
                     <div className='mt-5 text-sm sm:mt-0'>
                        <p className='font-medium text-gray-900 '>Bekasi</p>
                        <p className='font-normal text-gray-500 '>
                           Mar 16, 2021 · 6 min read
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
