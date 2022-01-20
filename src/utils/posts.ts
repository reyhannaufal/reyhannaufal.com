import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '@/src/pages/blog/[slug]';
/**
 * Get all posts from folder from `posts`
 */
const postsDirectory = join(process.cwd(), 'src/data/posts');

export function getPostSlugs() {
   return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields = []) {
   const realSlug = slug.replace(/\.md$/, '');
   const fullPath = join(postsDirectory, `${realSlug}.md`);
   const fileContents = fs.readFileSync(fullPath, 'utf8');
   const { data, content } = matter(fileContents);

   const items = {};

   // Ensure only the minimal needed data is exposed
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

export function getAllPosts(fields = []) {
   const slugs = getPostSlugs();
   type AllPosts = {
      date?: string;
   };
   const posts = slugs
      .map((slug: any) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((firstPost: AllPosts, secondPost: AllPosts) =>
         firstPost.date ?? '' > (secondPost.date ?? '') ? -1 : 1
      );
   return posts;
}
