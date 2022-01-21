export interface Post {
   excerpt?: string;
   type?: string;
   image?: string;
   new?: boolean;
   slug?: string;
   title?: string;
   content?: string;
   createdAt?: string;
   date?: string;
   coverImage?: string;
   author?: {
      name: string;
   };
}
