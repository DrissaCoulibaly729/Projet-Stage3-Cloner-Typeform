import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { extractIdFromUrl } from '../../Utils/id.utils';
import { getFormsByWorkspaceId } from '../../Services/axios.services';
import getCategoryDetailsByLabel from '../../Utils/img.utils'; // Assurez-vous que le chemin est correct

const SidebarG = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = extractIdFromUrl(searchParams);

  const [forms, setForms] = useState([]);
  const [error, setError] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      if (id) {
        try {
          const data = await getFormsByWorkspaceId(id);
          console.log('data : ', data);
          if (Array.isArray(data)) {
            setForms(data);
            const formLabels = data.map(form => form.title);
            // Assurez-vous que les labels sont corrects
            const details = formLabels.map(label => getCategoryDetailsByLabel(label));
            setCategoryDetails(details);
          } else {
            setError('Data is not an array');
          }
        } catch (err) {
          setError('Error fetching forms');
          console.error(err);
        }
      }
    };

    fetchForms();
  }, [id]);

  return (
    <div className="bg-gray-100 p-4 w-1/6 min-h-screen border-r flex flex-col space-y-4">
      {/* Panel group */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Panel 1 */}
        <div className="flex-grow overflow-hidden">
          
              {categoryDetails.map((category, index) => (
                 <div className="flex flex-col m-1 cursor-pointer">
                 <div className="flex items-center space-x-4 bg-gray-200 p-2 rounded">
                <div key={index} className={`flex space-x-2 ${category.bgColor} border pl-1 pr-5 rounded-lg`}>
                  <img src={category.imageSrc} alt='category_icon' className='w-[20px] h-[20px] text-center items-center' />
                  <span className="text-sm font-medium">1</span>
                </div>
                </div>
                </div>
              ))}
         
        
        </div>

        {/* Separator */}
        <div className="h-0.5 bg-gray-300 my-4"></div>

        {/* Panel 2 */}
        <div className="flex-grow overflow-hidden">
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
