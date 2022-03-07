import { Author } from './projects';

export interface Post {
   excerpt: string;
   type: string;
   image: string;
   new: boolean;
   slug: string | undefined;
   title: string;
   content: string;
   createdAt: string;
   date: string;
   coverImage: string;
   author: Author;
}

export type OptionalPost = Partial<Post>;
