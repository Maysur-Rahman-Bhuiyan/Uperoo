import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <img 
        src="/developer.jpg" 
        alt="Responsive design basics" 
        className="w-full h-auto rounded-2xl shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">Responsive Design Basics</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        Responsive design ensures your website looks great on all screen sizes — from phones to desktops.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        It involves using flexible layouts, media queries, and scalable assets to adapt to the user’s device.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Mastering responsive design is essential in today’s mobile-first world, enhancing usability and SEO.
      </p>
    </div>
  );
};

export default Page;
