// src/components/Dashboard/Workspace.js

// src/components/Workspace.js

import React from 'react';
import FormCard from './FormCard';
import FormList from './FormList';

const Workspace = () => {
  const forms = [
    { title: 'My new form', responses: '0/10', completion: '-', updated: '10 Jul 2024', integrations: '' },
  ];

  return (
    <div className="p-4 flex-1">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">My workspace</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Invite</button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <FormCard title="Create a academic performance quiz" description="Assessing subject knowledge." />
        <FormCard title="Create a opinion poll" description="On current events or social issues." />
        <FormCard title="Create a demographic survey" description="Gathering age, gender, education level." />
      </div>
      <FormList forms={forms} />
    </div>
  );
};

export default Workspace;

