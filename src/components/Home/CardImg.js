import React from 'react';

const CardImg = () => {
  return (
    <div className="container mx-auto pt-10 mt-32 pr-6">
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-8 md:space-y-0 md:space-x-20 pr-6">
          <div className="w-full md:w-auto md:pr-20">
            <h2 className="text-2xl font-weight-100 text-center md:text-left">Works with your existing workflow</h2>
            <a href="/" className="block text-center md:text-left text-black mt-2">Browse 120+ integrations</a>
          </div>
          <div className="flex flex-wrap justify-center md:flex-no-wrap">
            <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-100 p-8 w-64 h-64 flex justify-center items-center mb-4 md:mb-0 md:mr-4">
              <img src="/svg/zapier-logo.svg" alt="zapier-logo" className="max-w-full max-h-full" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-100 p-8 w-64 h-64 flex justify-center items-center mb-4 md:mb-0 md:mr-4">
              <img src="/svg/calendly-logo.svg" alt="calendly-logo" className="max-w-full max-h-full" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg bg-gray-100 p-8 w-64 h-64 flex justify-center items-center">
              <img src="/svg/hubspot-logo-1.svg" alt="hubspot-logo" className="max-w-full max-h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImg;
