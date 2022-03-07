export interface Project {
   author: Author;
   coverImage: string;
   date: string;
   excerpt: string;
   slug: string;
   title: string;
   type: string;
   image: string;
   content: string;
}

export type Author = {
   name: string;
};

export type OptionalProject = Partial<Project>;
