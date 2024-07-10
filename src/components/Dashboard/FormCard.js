// src/components/Dashboard/FormCard.js

import React from 'react';



const FormCard = ({ title, description }) => {
  return (
    <div className="bg-purple-100 p-4 rounded shadow-md mb-4 flex flex-col justify-between">
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Use this form</button>
    </div>
  );
};

export default FormCard;
