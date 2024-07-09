import React from 'react';

const CardImgDG = () => {
  return (
    <div className="pt-6 pr-6">
        <p className='text-center text-6xl font-bold p-10 m-10 '>Refreshingly different,
        by design</p>
      {/* Première section en haut */}
      <div className="mb-12">
        <div className="flex justify-center items-start space-x-6 pt-6 pr-6">
          <div className="w-1/2  px-6 pl-48 mt-20">
            <h1 className="text-5xl font-bold mt-0 mb-2">Looks striking. Feels effortless.</h1>
            <p className="mt-2 mb-4 mt-5 text-base text-gray-700">Impress your form takers. Catch their eye with striking visuals, and make form-filling feel effortless by replacing walls of questions with just one at a time.</p>
            <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
          </div>
          <div className="w-1/2 pr-48">
            <img src="/img/videoframe_1.png" alt="videoframe_1" className="w-full h-auto rounded shadow" />
          </div>
        </div>
      </div>

      {/* Deuxième section en bas */}
      <div className="flex justify-center items-start space-x-6 pt-6 pr-6">
        <div className="w-1/2 pl-48">
          <img src="/img/videoframe_2.png" alt="videoframe_2" className="w-full h-auto rounded shadow" />
        </div>
        <div className="w-1/2  px-6 pr-48 mt-20">
          <h1 className="text-5xl font-bold mt-0 mb-2">Embeds smoothly. Reveals more.</h1>
          <p className="mt-2 mb-4 text-base text-gray-700">Collect more and better data. Embed forms where people see them, from web to email. Ask the right follow-up question at the right time to reveal deeper insights.</p>
          <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default CardImgDG;
