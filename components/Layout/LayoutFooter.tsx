import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const footerLogoSize = 'w-5 h-5 text-slate-400 hover:text-slate-500';

export default function Footer() {
   return (
      <footer>
         <div className='flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between'>
            <div className='flex items-start space-x-6'>
               <a className='group'>
                  <span className='sr-only'>Reyhan on Linkedin</span>
                  <IoLogoLinkedin className={footerLogoSize} />
               </a>
               <a className='group'>
                  <span className='sr-only'>Reyhan on GitHub</span>
                  <IoLogoGithub className={footerLogoSize} />
               </a>
            </div>
            <p className='mt-6 text-sm text-slate-500 sm:mt-0'>
               Copyright &copy; {new Date().getFullYear()} Reyhan Naufal Rahman.
               All rights reserved.
            </p>
         </div>
      </footer>
   );
}
