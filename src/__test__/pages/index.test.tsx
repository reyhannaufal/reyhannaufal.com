import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '@/pages/index';

/** Mock Seo's useRouter */
jest.mock('next/router', () => ({
   useRouter() {
      return {
         asPath: '/',
      };
   },
}));

const mockProjects = [
   {
      title: 'Nells',
      excerpt:
         'Nells is a web application that helps people to be aware of armpit diseases, by providing information about the diseases and their symptoms. The application is built with ReactJS, NextJS, and TailwindCSS.',
      coverImage: '/projects/nells/nells-image-1.png',
      date: 'December 1, 2021',
      author: {
         name: 'Reyhan Naufal Rahman',
         picture: '/assets/blog/authors/joe.jpeg',
      },
      ogImage: {
         url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      },
      type: 'Frontend',
      slug: 'nells',
   },
];

describe('Index Page', () => {
   it('renders index page', async () => {
      const { container } = render(<HomePage projects={mockProjects} />);

      expect(container.firstChild?.hasChildNodes()).toBeTruthy();
   });

   it('renders correct home heading', async () => {
      const { findAllByTitle } = render(<HomePage projects={mockProjects} />);

      expect(findAllByTitle('Reyhan Naufal Rahman')).toBeTruthy();
   });

   it('renders correct project list', async () => {
      const { findAllByText } = render(<HomePage projects={mockProjects} />);

      expect(findAllByText(mockProjects[0].title)).toBeTruthy();
   });
});
