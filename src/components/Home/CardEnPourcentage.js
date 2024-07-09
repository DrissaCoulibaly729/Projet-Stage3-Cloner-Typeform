import React from 'react';

const CardEnPourcentage = () => {
  return (
    <div className="text-center">
      <div className="mb-2 mt-32">
        <h1 className="text-5xl font-bold">Why Typeform?</h1>
        <p className="text-gray-700 mt-8">Because after switching to us...</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-20 px-56 text-center md:text-left">
        <div className="w-full md:w-1/3 p-6">
          <h2 className="text-5xl text-center font-light mb-4">96%</h2>
          <p className="text-gray-700 text-2xl mb-4">of customers say they have a better brand experience</p>
        </div>

        <div className="w-full md:w-1/3 p-6 mt-8 md:mt-0">
          <h2 className="text-5xl text-center font-light mb-4">95%</h2>
          <p className="text-gray-700 text-2xl mb-4">of customers say they gather more data, more easily</p>
        </div>

        <div className="w-full md:w-1/3 p-6 mt-8 md:mt-0">
          <h2 className="text-5xl text-center font-light mb-4">87%</h2>
          <p className="text-gray-700 text-2xl mb-4">of customers say they reveal deeper insights from data</p>
        </div>
      </div>
    </div>
  );
};

export default CardEnPourcentage;
