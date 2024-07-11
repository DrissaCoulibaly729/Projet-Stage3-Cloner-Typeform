import React from 'react';

const OptionCard = ({ Icon, title, text, bgColor }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg cursor-pointer relative overflow-hidden p-6 md:w-64 md:h-72">
      <div className={`p-4 rounded-full ${bgColor}`}>
        <Icon className="text-3xl" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-center">{title}</h3>
      <p className="mt-2 text-center text-gray-500">{text}</p>
    </div>
  );
};

export default OptionCard;
