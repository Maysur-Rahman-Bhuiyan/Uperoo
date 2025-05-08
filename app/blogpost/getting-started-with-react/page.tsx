import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img 
        src="/developer.jpg" 
        alt="Getting started with React" 
        className="w-full h-auto rounded-2xl shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Getting Started with React</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        React is a JavaScript library for building user interfaces. It allows developers to build reusable components that manage their own state.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        React makes it easier to build complex UIs by breaking the UI into independent, isolated pieces of code called components.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        With a virtual DOM and efficient rendering, React improves performance and is widely used in modern web applications.
      </p>
    </div>
  );
};

export default Page;
