import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img 
        src="/developer.jpg" 
        alt="Developer working on JavaScript" 
        className="w-full h-auto rounded-2xl shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">What is JavaScript?</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        JavaScript is a dynamic programming language that powers the interactivity on websites.
        From simple animations to full-featured web apps, JavaScript enables the dynamic behavior seen in modern web development.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        It works alongside HTML and CSS to create responsive, interactive web experiences.
        JavaScript can manipulate the DOM, communicate with servers, and much more.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        It’s one of the most popular and versatile languages, essential for front-end development and also widely used on the backend with Node.js.
      </p>
    </div>
  );
};

export default Page;
