import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export function getAllLocalDataFiles(folderName: string) {
   const directory = path.join(process.cwd(), `src/data/${folderName}`);
   const filenames = fs.readdirSync(directory, 'utf8');
   const paths = filenames.map((name) => ({
      params: { slug: name.replace('.mdx', '') },
   }));
   const allFiles = paths.map((p) => {
      const directoryFiles = fs.readFileSync(
         `${directory}/${p.params.slug}.mdx`,
         'utf-8'
      );

      const { data } = matter(directoryFiles);

      return {
         ...data,
         slug: p?.params?.slug,
      };
   });
   return allFiles;
}
