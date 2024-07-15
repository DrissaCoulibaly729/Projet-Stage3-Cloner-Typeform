import React from 'react';
import { FiPlus, FiSearch, FiGrid, FiChevronUp } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-full ml-4 sm:w-1/4 md:w-1/5 bg-gray-50 border-r-4 border-white">
      <div className="mb-4 p-2 px-5 border-b-4 border-white">
        <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg mb-2">
          <FiPlus className="text-xl mr-2" />
          Create a new form
        </button>
      </div>

      <div className="border-b-4 border-white">
        <div className="mb-4 px-5 flex items-center">
          <FiSearch className="text-xl mr-2 text-center" />
          <span className='text-center'>Search</span>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiGrid className="text-xl mr-2" />
            <span>Workspace</span>
          </div>
          <div className='bg-white border p-1 rounded-lg'>
            <FiPlus className="text-xl" />
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="flex items-center justify-between">
          <span>Private</span>
          <FiChevronUp className="text-xl" />
        </div>
      </div>

      <div className="px-5 py-2 border flex justify-between bg-gray-300 text-black rounded-lg mb-4">
        <span>Test</span>
        <span>0</span>
      </div>
      <div className="px-5 py-2 border flex justify-between bg-gray-300 text-black rounded-lg">
        <span>My Workspace</span>
        <span>0</span>
      </div>

      <div className='pt-16 border-b-2 border-white'></div>

      <div className='px-5 py-4'>
        <span>Responses Collected</span>
        <div className='border bg-gray-300 border-b-2 p-0.5 mt-2'></div>
        <span>0/10</span>
      </div>

      <div className='px-5 py-4'>
        <span>Reset on July</span>
        <div className='mt-5'>
          <a href='/' className='flex items-center bg-white text-gray-500 rounded-lg px-4 py-2 mb-2'>
            Increase response limit
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
