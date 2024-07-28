import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { BsPhone } from 'react-icons/bs';

const FormComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex justify-end w-full p-4 bg-white shadow-md">
        <GrClose className="text-lg" />
        <BsPhone className="mx-2 text-lg" />
        <AiOutlineArrowRight className="text-lg" />
      </div>
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md mt-8">
        <div className="flex items-center mb-4">
          <span className="text-lg font-medium">1</span>
          <AiOutlineArrowRight className="mx-2 text-xl" />
          <span className="text-lg font-medium">...</span>
        </div>
        <div className="space-y-4 mb-4">
          <button className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
            <span className="font-semibold">A</span>
            <span>Choice 1</span>
          </button>
          <button className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
            <span className="font-semibold">B</span>
            <span>Choice 2</span>
          </button>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Submit</button>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center">
        <button className="bg-blue-600 text-white p-2 rounded-l">
          <AiOutlineArrowLeft />
        </button>
        <button className="bg-blue-600 text-white p-2 rounded-r">
          <AiOutlineArrowRight />
        </button>
        <span className="ml-2 text-sm">Powered by Typeform</span>
      </div>
    </div>
  );
};

export default FormComponent;
