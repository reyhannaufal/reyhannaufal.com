import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export const folderDirectory = (source: string) => join(process.cwd(), source);

export function getMdxFilesSlug(source: string) {
   return fs.readdirSync(folderDirectory(source));
}

export function getMdxFileBySlug(slug: string, fields = [], source: string) {
   const realSlug = slug.replace(/\.md$/, '');
   const fullPath = join(folderDirectory(source), `${realSlug}.md`);
   const fileContents = fs.readFileSync(fullPath, 'utf8');
   const { data, content } = matter(fileContents);

   const items = {};

   fields.forEach((field) => {
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

export const getAllMdxFiles = (fields = [], source: string) => {
   const slugs = getMdxFilesSlug(source);
   type AllPosts = {
      date?: string;
   };
   const posts = slugs
      .map((slug: any) => getMdxFileBySlug(slug, fields, source))
      .sort((firstPost: AllPosts, secondPost: AllPosts) =>
         firstPost.date ?? '' > (secondPost.date ?? '') ? -1 : 1
      );
   return posts;
};
