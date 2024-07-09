import React from "react";
import { MdArrowForward } from "react-icons/md";

const Card = () => {
  return (
    <div className=" items-center justify-center flex-col mb-8 mt-32">
    <div className="flex items-center justify-center flex-col mb-8">
        <h1 className="text-3xl font-bold mb-4">Do it all with a form</h1>
        <p className="text-gray-700 text-center">Whatever your goal, start with a ready-made template.</p>
      </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 rounded-lg">

      <div className=" bg-gray-100 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Marketing</h2>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Signups</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Branding</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Customer feedback</p>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Product</h2>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Beta testing</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Product research</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Product feedback</p>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Customer success</h2>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">FAQ builder</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Net promoter score</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Customer satisfaction</p>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">HR</h2>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Job application</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">360 degree feedback</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Employee engagement</p>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Creators</h2>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Referral</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Registration</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Client onboarding</p>
        </div>
      </div>

      <div className=" bg-gray-100 rounded-3xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">General business</h2>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Referral</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Registration</p>
        </div>
        <div className="flex items-center mb-4">
          <MdArrowForward className="mr-2" />
          <p className="text-gray-700">Client onboarding</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
