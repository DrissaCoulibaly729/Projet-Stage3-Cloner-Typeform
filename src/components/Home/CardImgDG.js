import React from 'react';

const CardImgDG = () => {
  return (
    <div className="container mx-auto pt-6 pr-6">
      <p className="text-center text-4xl md:text-6xl font-bold py-10 px-4 md:p-10 md:m-10">Refreshingly different, by design</p>

      {/* Première section en haut */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-x-6 md:pt-6 md:pr-6">
          <div className="w-full md:w-1/2 px-6 md:pl-48 md:mt-20">
            <h1 className="text-3xl md:text-5xl font-bold mt-0 mb-2">Looks striking. Feels effortless.</h1>
            <p className="mt-2 mb-4 text-base md:text-lg text-gray-700">Impress your form takers. Catch their eye with striking visuals, and make form-filling feel effortless by replacing walls of questions with just one at a time.</p>
            <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
          </div>
          <div className="w-full md:w-1/2 md:pr-48">
            <img src="/img/videoframe_1.png" alt="videoframe_1" className="w-full h-auto rounded shadow" />
          </div>
        </div>
      </div>

      {/* Deuxième section en bas */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-6 md:space-x-6 pt-6 md:pr-6">
        <div className="w-full md:w-1/2 md:pl-48">
          <img src="/img/videoframe_2.png" alt="videoframe_2" className="w-full h-auto rounded shadow" />
        </div>
        <div className="w-full md:w-1/2 px-6 md:pr-48 md:mt-20">
          <h1 className="text-3xl md:text-5xl font-bold mt-0 mb-2">Embeds smoothly. Reveals more.</h1>
          <p className="mt-2 mb-4 text-base md:text-lg text-gray-700">Collect more and better data. Embed forms where people see them, from web to email. Ask the right follow-up question at the right time to reveal deeper insights.</p>
          <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default CardImgDG;
