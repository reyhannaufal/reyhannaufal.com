import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Post } from '@/pages/blog/[slug]';
/**
 * Get all posts from folder from `_posts`
 */
const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
   return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields = []) {
   const realSlug = slug.replace(/\.md$/, '');
   const fullPath = join(postsDirectory, `${realSlug}.md`);
   const fileContents = fs.readFileSync(fullPath, 'utf8');
   const { data, content } = matter(fileContents);

   const items = {};

   console.log('%cposts.ts line:21 fields', 'color: #007acc;', typeof fields);

   // Ensure only the minimal needed data is exposed
   fields.forEach((field) => {
      console.log(field);
      if (field === 'slug') {
         items[field] = realSlug;
      }
      if (field === 'content') {
         items[field] = content;
      }

      if (typeof data[field] !== 'undefined') {
         items[field] = data[field];
      }
   });

   return items;
}

export function getAllPosts(fields = []) {
   const slugs = getPostSlugs();
   const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((firstPost, secondPost) =>
         firstPost.date > secondPost.date ? -1 : 1
      );
   return posts;
}
