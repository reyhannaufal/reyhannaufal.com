import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const footerLogoSize = 'w-7 h-7';
const footerList = [
   {
      id: '1',
      icon: <IoLogoGithub className={footerLogoSize} />,
      link: 'https://github.com/reyhannaufal',
   },
   {
      id: '2',
      icon: <IoLogoLinkedin className={footerLogoSize} />,
      link: 'https://www.linkedin.com/in/reyhan-naufal/',
   },
];

export default function Footer() {
   return (
      <footer className='flex-col py-20 mx-auto text-center sm:pt-36 text-primary'>
         <h2 className='max-w-3xl py-4 mx-auto text-sm sm:text-lg font-bold border-t-2 rounded-sm '>
            Contact Me
         </h2>
         <div className='flex flex-row justify-center pb-3 space-x-2'>
            {footerList.map((item) => (
               <a
                  key={item.id}
                  href={item.link}
                  rel='noopener noreferrer '
                  target='_blank'
               >
                  {item.icon}
               </a>
            ))}
         </div>
         <p className='text-sm md:text-base'>© Reyhan Naufal Rahman 2021 </p>
      </footer>
   );
}
