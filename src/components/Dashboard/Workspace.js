import React, { useEffect, useState } from 'react';
import { FiPlus, FiUsers } from 'react-icons/fi';
import { MdDateRange } from 'react-icons/md';
import { FaListUl, FaThLarge } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getAllWorkspaces } from '../../Services/axios.services';

const Workspace = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const data = await getAllWorkspaces();
        console.log('workspaceData : ', data);
        setWorkspaces(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    };

    fetchWorkspaces();
  }, []);

  const redirectToFormList = () => {
    navigate('/form');
  };

  const redirectToWorkspace = (id) => {
    const randomCode = Math.random().toString(36).substr(2, 9);
    navigate(`/workspace?${id}-code=${randomCode}`);
  };

  return (
    <div className="w-full sm:w-3/4 lg:w-4/5 xl:w-full mr-4 bg-gray-50">
      <div className="flex items-center justify-between p-16 bg-gray-50">
        <div className="flex items-center space-x-5">
          <h1 className="text-xl font-semibold">Test</h1>
          <button className="flex items-center space-x-1 text-gray-600">
            <FiUsers className="w-5 h-5" />
            <span>Invite</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600">
            <img src='/svg/premium.svg' alt='premium' />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 border rounded px-2 py-1 text-gray-600">
            <MdDateRange className="w-5 h-5" />
            <span>Date created</span>
          </button>
          <div className="inline-block flex">
            <button className="bg-transparent px-2 bg-stone-200 flex items-center space-x-1 text-gray-600 rounded-l-md">
              <FaListUl className="w-5 h-5" />
              <span>List</span>
            </button>
            <button className="bg-transparent px-2 bg-white flex items-center space-x-1 text-gray-600 rounded-r-md">
              <FaThLarge className="w-5 h-5" />
              <span>Grid</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col pt-10 items-center w-full">
        {workspaces.length > 0 ? (
          <div className="flex flex-col w-full space-y-4">
            {workspaces.map((workspace) => (
              <div
                key={workspace.id}
                className="bg-white p-4 rounded-lg shadow-md w-full cursor-pointer"
                onClick={() => redirectToWorkspace(workspace.id)}
              >
                <button className="text-lg font-semibold w-full text-left">
                  {workspace.name}
                </button>
                {/* Add more workspace details here if needed */}
              </div>
            ))}
          </div>
        ) : (
          <>
            <img
              src="/img/hall-of-forms.2a8cb59d34bfc32ce0fc.png"
              alt="No forms"
              className="mb-4"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <p>There's not a form in sight</p>
            <button onClick={redirectToFormList} className="bg-black text-white py-2 px-4 rounded-lg flex items-center mt-2 ">
              <FiPlus className="mr-2" /> Create a new form
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Workspace;
