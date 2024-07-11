import React from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { FiGrid } from 'react-icons/fi';

const SidebarG = () => {
  return (
    <div className="bg-gray-100 p-4 w-1/6 min-h-screen border-r flex flex-col space-y-4">
      {/* Panel group */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Panel 1 */}
        <div className="flex-grow overflow-hidden">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 bg-purple-100 p-2 rounded">
              <AiOutlineCheckSquare className="text-purple-500" />
              <span className="text-lg font-medium">1</span>
            </div>
            <div className="mt-2">
              <button className="w-full text-left flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
                <FiGrid className="text-gray-500" />
                <span>...</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Separator */}
        <div className="h-0.5 bg-gray-300 my-4"></div>
        
        {/* Panel 2 */}
        <div className="flex-grow overflow-hidden">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 p-2 rounded">
              <span className="text-lg font-medium">Endings</span>
              <button className="ml-auto bg-blue-500 text-white px-2 py-1 rounded">
                <FiGrid />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarG;
