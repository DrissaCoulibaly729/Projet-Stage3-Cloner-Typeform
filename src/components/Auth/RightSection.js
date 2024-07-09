import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // Assurez-vous d'utiliser l'icône globe de react-icons

const RightSection = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-white w-full md:w-1/2 h-screen p-8">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaGlobe className="h-5 w-5 text-gray-500 mr-2" />
            <select className="text-gray-500">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
          <div className="flex items-center ">
            <span className="text-gray-500">Already have an account?</span>
            <a href="/login" className="ml-4 px-4 py-2 border border-gray-300 rounded text-gray-700">Log in</a>
          </div>
        </div>
        <div className="text-center mt-40">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Typeform</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Get better data with conversational forms, surveys, quizzes & more.
          </p>
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center">
            <img src="/svg/icons8-google.svg" alt="Google" className="mr-2" /> Sign up with Google
          </button>
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center">
            <img src="/svg/icons8-microsoft.svg" alt="Microsoft" className="mr-2" /> Sign up with Microsoft
          </button>
          <div className="text-gray-500 mb-4">OR</div>
          <button className="w-full bg-black text-white py-2 rounded">Sign up with email</button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
