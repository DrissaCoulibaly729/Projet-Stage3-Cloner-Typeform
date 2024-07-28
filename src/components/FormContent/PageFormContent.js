import React from 'react';
import { createForm, createWorkspace, getWorkspacesByUserId } from '../../Services/axios.services';
import { fetchUserData } from '../../Utils/user.utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { extractIdFromUrl } from '../../Utils/id.utils';

const categories = [
  {
    name: 'Recommended',
    items: [
      { label: 'Short Text', bgColor: 'bg-blue-100' },
      { label: 'Multiple Choice', bgColor: 'bg-purple-100' },
      { label: 'Statement', bgColor: 'bg-gray-100' },
      { label: 'Opinion Scale', bgColor: 'bg-green-100' },
      { label: 'Email', bgColor: 'bg-yellow-100' },
    ],
  },
  {
    name: 'Contact Info',
    items: [
      { label: 'Contact Info', bgColor: 'bg-yellow-100' },
      { label: 'Email', bgColor: 'bg-yellow-100' },
      { label: 'Phone Number', bgColor: 'bg-yellow-100' },
      { label: 'Address', bgColor: 'bg-yellow-100' },
      { label: 'Website', bgColor: 'bg-yellow-100' },
    ],
  },
  {
    name: 'Choice',
    items: [
      { label: 'Multiple Choice', bgColor: 'bg-purple-100' },
      { label: 'Dropdown', bgColor: 'bg-purple-100' },
      { label: 'Picture Choice', bgColor: 'bg-purple-100' },
      { label: 'Yes/No', bgColor: 'bg-purple-100' },
      { label: 'Legal', bgColor: 'bg-purple-100' },
    ],
  },
  {
    name: 'Rating & Ranking',
    items: [
      { label: 'Net Promoter Score', bgColor: 'bg-green-100' },
      { label: 'Opinion Scale', bgColor: 'bg-green-100' },
      { label: 'Rating', bgColor: 'bg-green-100' },
      { label: 'Ranking', bgColor: 'bg-green-100' },
      { label: 'Matrix', bgColor: 'bg-green-100' },
    ],
  },
  {
    name: 'Text',
    items: [
      { label: 'Long Text', bgColor: 'bg-blue-100' },
      { label: 'Short Text', bgColor: 'bg-blue-100' },
      { label: 'Video', bgColor: 'bg-orange-100', isPremium: true },
    ],
  },
  {
    name: 'Other',
    items: [
      { label: 'Number', bgColor: 'bg-yellow-100' },
      { label: 'Date', bgColor: 'bg-yellow-100' },
      { label: 'Payment', bgColor: 'bg-yellow-100', isPremium: true },
      { label: 'File Upload', bgColor: 'bg-yellow-100', isPremium: true },
      { label: 'Google Drive', bgColor: 'bg-yellow-100', isPremium: true },
      { label: 'Calendly', bgColor: 'bg-yellow-100' },
    ],
  },
  {
    name: 'Welcome Screen',
    items: [
      { label: 'Welcome Screen', bgColor: 'bg-gray-100' },
      { label: 'Statement', bgColor: 'bg-gray-100' },
      { label: 'Question Group', bgColor: 'bg-gray-100' },
      { label: 'Multi Question Page', bgColor: 'bg-gray-100' },
      { label: 'End Screen', bgColor: 'bg-gray-100' },
      { label: 'Redirect to URL', bgColor: 'bg-gray-100', isPremium: true },
    ],
  },
];

const PageFormContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = extractIdFromUrl(searchParams);

  const generateUniqueWorkspaceName = async (userId, baseName) => {
    try {
      const response = await getWorkspacesByUserId(userId);
      console.log('Existing workspaces response:', response);
      const workspaces = Array.isArray(response) ? response : [response];

      if (response && response[0] && response[0].exception) {
        console.error('Error response from getWorkspacesByUserId:', response);
        throw new Error(response[0].message);
      }

      console.log('Existing workspaces:', workspaces); // Log the existing workspaces

      let newName = baseName;
      let counter = 1;

      while (workspaces.some(ws => ws.name === newName)) {
        console.log(`Name conflict: ${newName} exists. Trying another name...`);
        newName = `${baseName} ${counter}`;
        counter++;
      }

      console.log(`Generated unique name: ${newName}`);
      return newName;
    } catch (error) {
      console.error('Error generating unique workspace name:', error);
      throw error;
    }
  };

  const handleClick = async (itemLabel) => {
    try {
      const userDataArray = await fetchUserData();
      const userId = userDataArray.find(item => item.key === 'ID')?.value || '';

      let workspaceId = id;

      // If ID does not exist, create a new workspace
      if (!workspaceId) {
        const baseName = 'Workspace';
        const uniqueName = await generateUniqueWorkspaceName(userId, baseName);

        const workspaceData = {
          user_id: userId,
          name: uniqueName,
        };
        const workspace = await createWorkspace(workspaceData);
        workspaceId = workspace.id;
      }

      const formData = {
        workspace_id: workspaceId,
        title: itemLabel,
      };
      const form = await createForm(formData);

      // Generate a random combination of numbers
      const randomCombination = Math.floor(Math.random() * 1000000);

      // Navigate to the workspace with workspace ID and random combination
      navigate(`/workspace?${workspaceId}-${randomCombination}`);
    } catch (error) {
      console.error('Error creating workspace or form:', error);
    }
  };

  const getImageSrc = (label) => `/svg/${label.toLowerCase().replace(/ /g, '_')}.svg`;

  return (
    <div className="flex justify-center">
      <div className="bg-stone-100 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="p-4 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li className="text-sm"><a href="/">Add content</a></li>
              <li className="text-sm"><a href="/">Import questions</a></li>
              <li className="text-sm"><a href="/">Create with AI</a></li>
              <li className="text-sm"><a href="/">Qualify leads</a></li>
            </ul>
          </nav>
        </div>
        <div className="p-4 bg-white m-2 mb-0 mr-0 rounded-l-3xl rounded-br-3xl">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="flex bg-gray-100 border p-1 rounded-lg w-full items-center mb-4">
                <img src="/svg/search.svg" alt="Search" className="h-4 w-4 ml-2" />
                <input type="text" placeholder="Find a content type" className="ml-2 bg-gray-100 border-none focus:outline-none w-full" />
              </div>
              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-600">Recommended</h3>
                <div className="grid grid-cols-1 gap-2">
                  {categories[0].items.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item.label)} className="flex cursor-pointer items-center p-1 rounded-lg border">
                      <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
                        <img src={getImageSrc(item.label)} className="h-2 w-2 md:h-4 md:w-4" alt={item.label} />
                      </div>
                      <span className="ml-2 text-xs md:text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-600">Contact Info</h3>
              <div className="grid grid-cols-1 gap-2 mb-4">
                {categories[1].items.map((item, index) => (
                  <div key={index} onClick={() => handleClick(item.label)} className="flex cursor-pointer items-center p-1 rounded-lg">
                    <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
                      <img src={getImageSrc(item.label)} className="h-2 w-2 md:h-4 md:w-4" alt={item.label} />
                    </div>
                    <span className="ml-2 text-xs md:text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
              <h3 className="mb-2 text-sm font-medium text-gray-600">Text</h3>
              <div className="grid grid-cols-1 gap-2">
                {categories[4].items.map((item, index) => (
                  <div key={index} onClick={() => handleClick(item.label)} className="flex cursor-pointer items-center p-1 rounded-lg">
                    <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
                      <img src={getImageSrc(item.label)} className="h-2 w-2 md:h-4 md:w-4" alt={item.label} />
                    </div>
                    <span className="ml-2 text-xs md:text-sm">{item.label}</span>
                    {item.isPremium && <img src="/svg/premium.svg" className="ml-auto h-4 w-4 bg-yellow-200" alt="Premium" />}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-600">Choice</h3>
              <div className="grid grid-cols-1 gap-2 mb-4">
                {categories[2].items.map((item, index) => (
                  <div key={index} onClick={() => handleClick(item.label)} className="flex cursor-pointer items-center p-1 rounded-lg">
                    <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
                      <img src={getImageSrc(item.label)} className="h-2 w-2 md:h-4 md:w-4" alt={item.label} />
                    </div>
                    <span className="ml-2 text-xs md:text-sm">{item.label}</span>
                    {item.isPremium && <img src="/svg/premium.svg" className="ml-auto h-4 w-4 bg-yellow-200" alt="Premium" />}
                  </div>
                ))}
              </div>
              <h3 className="mb-2 text-sm font-medium text-gray-600">Other</h3>
              <div className="grid grid-cols-1 gap-2">
                {categories[5].items.map((item, index) => (
                  <div key={index} onClick={() => handleClick(item.label)} className="flex cursor-pointer items-center p-1 rounded-lg">
                    <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
                      <img src={getImageSrc(item.label)} className="h-2 w-2 md:h-4 md:w-4" alt={item.label} />
                    </div>
                    <span className="ml-2 text-xs md:text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-600">Rating & Ranking</h3>
              <div className="grid grid-cols-1 gap-2 mb-4">
                {categories[3].items.map((item, index) => (
                  <div key={index} onClick={() => handleClick(item.label)} className="flex cursor-pointer items-center p-1 rounded-lg">
                    <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
                      <img src={getImageSrc(item.label)} className="h-2 w-2 md:h-4 md:w-4" alt={item.label} />
                    </div>
                    <span className="ml-2 text-xs md:text-sm">{item.label}</span>
                    {item.isPremium && <img src="/svg/premium.svg" className="ml-auto h-4 w-4 bg-yellow-200" alt="Premium" />}
                  </div>
                ))}
              </div>
              <h3 className="mb-2 text-sm font-medium text-gray-600">Welcome Screen</h3>
              <div className="grid grid-cols-1 gap-2">
                {categories[6].items.map((item, index) => (
                  <div key={index} onClick={() => handleClick(item.label)} className="flex cursor-pointer items-center p-1 rounded-lg">
                    <div className={`flex items-center justify-center p-2 rounded-lg ${item.bgColor}`}>
                      <img src={getImageSrc(item.label)} className="h-2 w-2 md:h-4 md:w-4" alt={item.label} />
                    </div>
                    <span className="ml-2 text-xs md:text-sm">{item.label}</span>
                    {item.isPremium && <img src="/svg/premium.svg" className="ml-auto h-4 w-4 bg-yellow-200" alt="Premium" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFormContent;
