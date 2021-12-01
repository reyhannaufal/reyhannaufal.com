import Link from 'next/link';

export default function ProjectsView({ allProjects }: any) {
   console.log(
      '%cProjectsView.tsx line:4 allProjects',
      'color: #007acc;',
      allProjects
   );
   return (
      <div className='py-20'>
         <h1 className='text-3xl font-bold'>Projects</h1>
         <p className='text-base font-normal'>
            Some cool projects that I have worked on!
         </p>
         <div className='flex flex-col sm:flex-row sm:space-x-5'>
            {allProjects.map((project: any) => (
               <div key={project.slug}>
                  <Link href={`/projects/${project.slug}`}>
                     <div className='my-10'>
                        <img
                           className='rounded-lg w-full h-[250px] mb-5'
                           src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                           alt={project.title}
                        />
                        <h3 className='inline-block 2 px-4 py-2 mt-8 mb-2 text-xs font-medium text-indigo-800 bg-indigo-300 md:text-sm sm:mt-0 rounded-3xl'>
                           {project.type}
                        </h3>
                        <h1 className='font-bold text-2xl mt-3'>
                           {project.title}
                        </h1>
                        <p className='mt-4 text-gray-500'>{project.excerpt}</p>
                        <p className='mt-3 text-[13px] text-gray-500'>
                           {project.date}
                        </p>
                        <p className='mt-6 underline cursor-pointer text-gray-700'>
                           Read More
                        </p>
                     </div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
}
