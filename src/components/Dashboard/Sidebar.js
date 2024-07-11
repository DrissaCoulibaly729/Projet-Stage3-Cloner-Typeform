import React from 'react';
import { FiPlus, FiSearch, FiGrid, FiChevronUp } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-full ml-4 sm:w-1/4 md:w-1/5 bg-gray-50 border-r-4 border-white">
      <div className="mb-4 p-3 px-5 border-b-4 border-white">
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg mb-2">
          <FiPlus className="text-xl mr-2" />
          Create a new form
        </button>
      </div>

      <div className="mb-4 p-3 px-5 border-b-4 border-white">
        <div className="flex items-center">
          <FiSearch className="text-xl mr-2" />
          <span>Search</span>
        </div>
      </div>

      <div className="m-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiGrid className="text-xl mr-2" />
            <span>Workspace</span>
          </div>
          <FiPlus className="text-xl mr-2" />
        </div>
      </div>

      <div className="m-5">
        <div className="flex items-center justify-between">
          <span>Private</span>
          <FiChevronUp className="text-xl mr-2" />
        </div>
      </div>

      <div className="m-5 border bg-gray-300 text-black p-2 rounded-lg">
        <span>My Workspace</span>
      </div>
    </aside>
  );
};

export default Sidebar;
