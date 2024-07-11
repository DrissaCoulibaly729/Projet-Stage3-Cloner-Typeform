import React from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-between items-center pt-2 px-4 sm:px-6 bg-white">
      <div className="flex items-center mb-2 sm:mb-0">
        <div className="bg-blue-600 text-white p-2 rounded-full">D</div>
        <span className="ml-2">dc377303</span>
        <FiChevronDown className="ml-auto sm:hidden" />
      </div>

      <div className="flex items-center">
        <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg mr-2">View Plan</button>
        <FiHelpCircle className="bg-gray-50 text-xl mr-2" />
        <div className="bg-blue-600 text-white p-2 rounded-full hidden sm:block">DC</div>
      </div>
    </header>
  );
};

export default Header;
