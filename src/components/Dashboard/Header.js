// src/components/Dashboard/Header.js


import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center">
        <div className="bg-blue-600 text-white p-3 rounded-full mr-2">D</div>
        <span>dc377303</span>
      </div>
      <button className="bg-orange-500 text-white py-2 px-4 rounded">View plans</button>
    </div>
  );
};

export default Header;

