// src/components/Dashboard/Sidebar.js


import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 w-64 h-screen p-4">
      <button className="bg-black text-white w-full py-2 rounded mb-4">+ Create a new form</button>
      <input className="w-full py-2 px-4 rounded mb-4" type="text" placeholder="Search" />
      <div className="mb-4">
        <h2 className="font-bold mb-2">Workspaces</h2>
        <div className="bg-white p-4 rounded">Private</div>
      </div>
      <div>
        <div className="bg-white p-4 rounded flex justify-between items-center">
          <span>My workspace</span>
          <span className="bg-gray-200 py-1 px-2 rounded-full text-xs">1</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
