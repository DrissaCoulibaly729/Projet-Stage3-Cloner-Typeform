import React from 'react';
import { AiOutlinePlus, AiOutlinePhone, AiOutlineEye, AiOutlineCheckSquare, AiOutlineHistory, AiOutlineSetting } from 'react-icons/ai';

const ContentHeader = () => {
  return (
    <div className="bg-stone-100 p-4 mx-4 border-b rounded-lg flex items-center">
      <div className="">
        <button className="flex items-center gap-2 focus:outline-none border border-gray-300 rounded-lg px-4 py-2">
          <AiOutlinePlus className="text-xl" />
          <span>Add Content</span>
        </button>
      </div>
      <div className="ml-10 flex items-center gap-2">
        <AiOutlinePhone className="text-xl" />
        <span className="text-lg">|</span>
        <AiOutlineEye className="text-xl" />
        <span className="text-lg">|</span>
        <AiOutlineCheckSquare className="text-xl" />
        <span className="text-lg">|</span>
        <AiOutlineSetting className="text-xl" />
        <span className="text-lg">|</span>
        <AiOutlineHistory className="text-xl" />
      </div>
    </div>
  );
};

export default ContentHeader;
