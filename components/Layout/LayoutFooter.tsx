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
      <footer className='mx-auto flex-col py-20 text-center text-primary sm:pt-36'>
         <h2 className='mx-auto max-w-3xl rounded-sm border-t-2 py-4 text-sm font-bold sm:text-lg '>
            Contact Me
         </h2>
         <div className='flex flex-row justify-center space-x-2 pb-3'>
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
