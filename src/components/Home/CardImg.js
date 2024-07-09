import React from 'react';

const CardImg = () => {
  return (
    <div className="pt-10 mt-32 pr-6">
      <div className="mb-12">
        <div className="flex justify-center items-center space-x-20 pr-48 mr-20">
            <div className='pl-20'>
                <h2 className="text-2xl font-bold ">Works with your existing workflow</h2>
                <a href='/' className='text-black'>Browse 120+ integrations</a>
            </div>
          <div className=" rounded-3xl overflow-hidden shadow-lg bg-gray-100 p-8 w-64 h-64 flex justify-center items-center">
            <img src="/svg/zapier-logo.svg" alt="zapier-logo" className="max-w-full max-h-full" />
          </div>
          <div className=" rounded-3xl overflow-hidden shadow-lg bg-gray-100 p-8 w-64 h-64 flex justify-center items-center">
            <img src="/svg/calendly-logo.svg" alt="calendly-logo" className="max-w-full max-h-full" />
          </div>
          <div className=" rounded-3xl overflow-hidden shadow-lg bg-gray-100 p-8 w-64 h-64 flex justify-center items-center">
            <img src="/svg/hubspot-logo-1.svg" alt="hubspot-logo" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
