import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const posts = [
  {
    title: 'What is HTML?',
    content: 'What is HTML?',
    image: '/developer.jpg',
    href: '/blogpost/what-is-html'
  },
  {
    title: 'What is CSS?',
    content: 'What is CSS?',
    image: '/developer.jpg',
    href: '/blogpost/what-is-css'
  },
  {
    title: 'what-is-javascript',
    content: 'what-is-javascript',
    image: '/developer.jpg',
    href: '/blogpost/what-is-javascript'
  },
  {
    title: 'getting-started-with-react',
    content: 'getting-started-with-react',
    image: '/developer.jpg',
    href: '/blogpost/getting-started-with-react'
  },
  {
    title: 'responsive-design-basics',
    content: 'responsive-design-basics',
    image: '/developer.jpg',
    href: '/blogpost/responsive-design-basics'
  },
  {
    title: 'why-learn-web-development',
    content: 'why-learn-web-development',
    image: '/developer.jpg',
    href: '/blogpost/why-learn-web-development'
  },
];

const Page = () => {
  return (
    <main className="min-h-screen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-all cursor-pointer duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content}</p>
              <Link href={post.href}>
                <Button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
