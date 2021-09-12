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
      <footer className='flex-col py-10 mx-auto text-center text-primary'>
         <h2 className='pb-4 text-lg'>Contact Me</h2>
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
         <p>© Reyhan Naufal Rahman 2021 </p>
      </footer>
   );
}
