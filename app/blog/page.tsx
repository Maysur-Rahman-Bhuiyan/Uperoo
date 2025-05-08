import Link from 'next/link';
import React from 'react';

const posts = [
  {
    title: 'Post 1',
    content: 'This is the content of post 1',
    image: '/developer.jpg',
    href: '/'
  },
  {
    title: 'Post 2',
    content: 'This is the content of post 2',
    image: '/developer.jpg',
    href: '/about'
  },
  {
    title: 'Post 3',
    content: 'This is the content of post 3',
    image: '/developer.jpg',
    href: '/services'
  },
  {
    title: 'Post 4',
    content: 'This is the content of post 4',
    image: '/developer.jpg',
    href: '/about'
  },
  {
    title: 'Post 5',
    content: 'This is the content of post 5',
    image: '/developer.jpg',
    href: '/pricing'
  },
  {
    title: 'Post 6',
    content: 'This is the content of post 6',
    image: '/developer.jpg',
    href: '/contact'
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
              <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                <Link href={post.href}>Read More</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
