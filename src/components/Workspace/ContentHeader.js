import React from 'react';
import { FiPlus, FiSmartphone, FiPlay, FiSettings } from 'react-icons/fi';
import { MdRefresh } from 'react-icons/md';
import { CgOptions } from 'react-icons/cg';
import { BsCircle } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import { extractIdFromUrl } from '../../Utils/id.utils';

const ContentHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const id = extractIdFromUrl(searchParams);

  const handleAddContent = () => {
    const randomCode = Math.random().toString(36).substr(2, 9); // Générer un code fictif
    navigate(`/formContent?${id}-code=${randomCode}`);
  };

  return (
    <div className="flex mx-5 items-center space-x-4 p-2 rounded-lg bg-stone-100">
      <button
        onClick={handleAddContent}
        className="flex items-center bg-white space-x-2 border rounded-full px-4 py-2 text-gray-600"
      >
        <FiPlus className="w-5 h-5" />
        <span>Add content</span>
      </button>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600">
          <FiSmartphone className="w-5 h-5" />
        </button>
        <button className="text-gray-600">
          <FiPlay className="w-5 h-5" />
        </button>
        <button className="text-gray-600">
          <BsCircle className="w-5 h-5" />
        </button>
        <button className="text-gray-600">
          <MdRefresh className="w-5 h-5" />
        </button>
        <button className="text-gray-600">
          <CgOptions className="w-5 h-5" />
        </button>
        <button className="text-gray-600">
          <FiSettings className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ContentHeader;
