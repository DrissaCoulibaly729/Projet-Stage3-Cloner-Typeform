// src/components//FormList.js

// src/components/FormList.js

import React from 'react';

const FormList = ({ forms }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      {forms.map((form, index) => (
        <div key={index} className="flex justify-between items-center mt-4 p-4 border rounded">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white p-2 rounded mr-2">F</div>
            <span>{form.title}</span>
          </div>
          <div>{form.responses}</div>
          <div>{form.completion}</div>
          <div>{form.updated}</div>
          <div>{form.integrations}</div>
        </div>
      ))}
    </div>
  );
};

export default FormList;
