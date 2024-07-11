import React from 'react';
import { FiPlus, FiList, FiGrid, FiMoreHorizontal, FiUserPlus } from 'react-icons/fi';

const Workspace = () => {
  return (
    <div className="w-full sm:w-3/4 lg:w-4/5  xl:w-full mr-4 bg-gray-50">
      <div className='flex p-8 justify-between'>
        <div className="flex justify-between space-x-5 items-center mb-6 w-full">
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

        <div className="flex justify-between items-center mb-6 w-full">
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

      <div className="flex flex-col pt-10 items-center">
        <img
          src="/img/hall-of-forms.2a8cb59d34bfc32ce0fc.png"
          alt="No forms"
          className="mb-4"
          style={{ maxWidth: '100%', height: 'auto' }}  
        />
        <p>There's not a form in sight</p>
        <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center mt-2">
          <FiPlus className="mr-2" /> Create a new form
        </button>
      </div>
    </div>
  );
};

export default Workspace;
