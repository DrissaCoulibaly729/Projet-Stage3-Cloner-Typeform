import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-50 border-b mx-4 text-black p-4">
      <ul className="flex">
        <li className="mr-20">
          <a href="/" className="hover:underline">Form</a>
        </li>
        <li className="mr-20">
          <a href="/" className="hover:underline">Integration</a>
        </li>
        <li>
          <a href="/" className="hover:underline">Brand Kit</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
