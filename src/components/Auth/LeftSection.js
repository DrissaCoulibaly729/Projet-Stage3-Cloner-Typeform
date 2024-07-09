import React from 'react';

const LeftSection = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white w-full md:w-1/2 h-screen p-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-10 mx-10">Sign up and come on in</h1>
        <img src="/img/product-sample@1x.webp" alt="Typeform" className="max-w-xs md:max-w-sm mx-auto mb-8" />
      </div>
      <footer className="mt-auto text-gray-400">
        © Typeform
      </footer>
    </div>
  );
};

export default LeftSection;
