import React from 'react';

const ContentBody = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="choice 1"
        className="block w-full p-2 border rounded mb-4"
      />
      <button className="py-2 px-4 bg-blue-500 text-white rounded">Add choice</button>
    </div>
  );
};

export default ContentBody;
