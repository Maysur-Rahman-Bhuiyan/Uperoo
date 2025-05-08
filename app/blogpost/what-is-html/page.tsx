import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Featured Image */}
      <img 
        src="/developer.jpg" 
        alt="Developer working on HTML" 
        className="w-full h-auto rounded-2xl shadow-lg mb-6"
      />

      {/* Blog Title */}
      <h1 className="text-4xl font-bold mb-4">What is HTML?</h1>

      {/* Blog Content */}
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        HTML, or HyperText Markup Language, is the standard language used to create web pages.
        It provides the basic structure of a webpage, which is enhanced and modified by other technologies like CSS and JavaScript.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        HTML uses a series of elements, represented by tags, to define the content and layout of a document.
        These elements include headings, paragraphs, links, images, and many others.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
        It is the foundation of all web development, making it one of the most essential technologies to learn for anyone interested in building websites or web apps.
      </p>
    </div>
  );
};

export default Page;
