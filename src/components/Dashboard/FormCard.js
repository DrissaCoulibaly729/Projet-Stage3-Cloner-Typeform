import React from 'react';

const FormCard = ({ title, buttonText }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <p className="mb-4">{title}</p>
      <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
        {buttonText}
      </button>
    </div>
  );
};

export default FormCard;
