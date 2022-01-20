import CardView from '@/src/components/Card/CardView';

export default function ProjectsView({ allProjects }: any) {
   return (
      <div className='pt-10 pb-15'>
         <h1 className='text-3xl font-bold'>Projects</h1>
         <p className='text-base font-normal'>
            Some cool projects that I have worked on!
         </p>
         <div className='flex flex-col sm:flex-row sm:space-x-5'>
            {allProjects.map((project: any, id: number) => (
               <div key={id}>
                  <CardView item={project} isProjectCard />
               </div>
            ))}
         </div>
      </div>
   );
}
