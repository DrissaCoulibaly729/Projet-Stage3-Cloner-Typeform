import React from 'react';

const OptionCard = ({ Icon, title, text, bgColor }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
      <div className={`p-4 rounded-full ${bgColor}`}>
        <Icon className="text-2xl" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-center text-gray-500">{text}</p>
    </div>
  );
};

export default OptionCard;
