import React from 'react';
import { FiPlus, FiSearch, FiGrid } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-gray-50 ml-4 p-4 border-r border-gray-300">
      <div className="mb-4">
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg mb-2">
          <FiPlus className="text-xl mr-2" />
          Create a new form
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <FiSearch className="bg-gray-50 text-xl mr-2" />
          <span>Search</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <FiGrid className="bg-gray-50 text-xl mr-2" />
          <span>Workspace</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center">
          <span className="bg-gray-50 text-xl mr-2">^</span>
          <span>Private</span>
        </div>
      </div>

      <div>
        <span>My Workspace</span>
      </div>
    </aside>
  );
};

export default Sidebar;
