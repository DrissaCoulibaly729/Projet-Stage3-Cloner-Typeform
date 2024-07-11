import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-50 border-b-4 border-white rounded-t-2xl mx-4 text-black p-4">
      <ul className="flex flex-wrap justify-center sm:justify-start">
        <li className="mr-8 mb-2 sm:mb-0">
          <a href="/" className="hover:underline">Form</a>
        </li>
        <li className="mr-8 mb-2 sm:mb-0">
          <a href="/" className="hover:underline">Integration</a>
        </li>
        <li className="mb-2 sm:mb-0">
          <a href="/" className="hover:underline">Brand Kit</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
