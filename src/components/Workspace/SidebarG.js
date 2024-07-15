import React from 'react';
import { FiPlus } from 'react-icons/fi';

const SidebarG = () => {
  return (
    <div className="bg-gray-100 p-4 w-1/6 min-h-screen border-r flex flex-col space-y-4">
      {/* Panel group */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Panel 1 */}
        <div className="flex-grow overflow-hidden">
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 bg-gray-200  p-2 rounded">
              <div className='flex space-x-2 bg-purple-100 border pl-1 pr-5 rounded-lg'>
                <img src='/svg/multiple_choice.svg' alt='multiple_chose' className=' w-[20px] h-[20px] text-center items-center' />
                <span className="text-sm font-medium ">1</span>
              </div>
            </div>
            {/* <div className="mt-2">
              <button className="w-full text-left flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
                <FiGrid className="text-gray-500" />
                <span>...</span>
              </button>
            </div> */}
          </div>
        </div>
        
        {/* Separator */}
        <div className="h-0.5 bg-gray-300 my-4"></div>
        
        {/* Panel 2 */}
        <div className="flex-grow overflow-hidden ">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 p-2 rounded justify-between">
              <span className="text-lg font-medium">Endings</span>
              <button className="ml-auto bg-white text-black px-2 py-1 rounded">
                <FiPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarG;
