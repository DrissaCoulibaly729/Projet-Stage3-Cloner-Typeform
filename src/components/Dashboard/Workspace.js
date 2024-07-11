import React from 'react';
import { FiPlus, FiList, FiGrid, FiMoreHorizontal, FiUserPlus } from 'react-icons/fi';

const Workspace = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className='flex  p-8 justify-between '>
        <div className="flex justify-between space-x-5 items-center mb-6">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">My Workspace</h2>
            <div className="flex-grow"></div>
          </div>
          <div className="flex items-center">
            <button className="mr-2">
              <FiMoreHorizontal />
            </button>
            <button className="mr-2">
              <FiUserPlus />
            </button>
            <span>Invite</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex">
            <div className="flex items-center ml-4">
              <button className="mr-2">
                <FiList />
              </button>
              <button className="mr-2">
                <FiGrid />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="/path/to/image.png"
          alt="No forms"
          className="mb-4"
          style={{ maxWidth: '100%', height: 'auto' }}  // Ensure the image is responsive
        />
        <p>There's not a form in sight</p>
        <button className="bg-black text-white py-2 px-4 rounded-full flex items-center mt-2">
          <FiPlus className="mr-2" /> Create a new form
        </button>
      </div>
    </div>
  );
};

export default Workspace;
