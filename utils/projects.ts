import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const projectsDirectory = join(process.cwd(), '_projects');

export function getProjectsSlugs() {
   return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string, fields = []) {
   const realSlug = slug.replace(/\.md$/, '');
   const fullPath = join(projectsDirectory, `${realSlug}.md`);
   const fileContents = fs.readFileSync(fullPath, 'utf8');
   const { data, content } = matter(fileContents);

   const items = {};

   console.log('%cposts.ts line:21 fields', 'color: #007acc;', typeof fields);

   // Ensure only the minimal needed data is exposed
   fields.forEach((field) => {
      console.log(field);
      if (field === 'slug') {
         items[field] = realSlug as never;
      }
      if (field === 'content') {
         items[field] = content as never;
      }

      if (typeof data[field] !== 'undefined') {
         items[field] = data[field] as never;
      }
   });

   return items;
}

export function getAllProjects(fields = []) {
   const slugs = getProjectsSlugs();
   type AllPosts = {
      date?: string;
   };
   const posts = slugs
      .map((slug: any) => getProjectBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((firstPost: AllPosts, secondPost: AllPosts) =>
         firstPost.date ?? '' > (secondPost.date ?? '') ? -1 : 1
      );
   return posts;
}
