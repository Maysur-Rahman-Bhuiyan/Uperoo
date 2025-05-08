import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img 
        src="/developer.jpg" 
        alt="Why learn web development" 
        className="w-full h-auto rounded-2xl shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Why Learn Web Development?</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        Web development is a powerful and in-demand skill that enables you to build websites, web apps, and even mobile applications.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        With the internet playing such a critical role in daily life and business, learning how to develop for the web opens endless opportunities.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
        It’s creative, technical, and offers excellent career paths whether you're freelancing, working at a startup, or joining a large tech company.
      </p>
    </div>
  );
};

export default Page;
