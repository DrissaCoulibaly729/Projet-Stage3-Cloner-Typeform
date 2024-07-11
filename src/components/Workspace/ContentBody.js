import React from 'react';

const ContentBody = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-10 bg-white border border-black rounded-lg max-w-lg w-full">
        <input
          type="text"
          placeholder="Choice 1"
          className="block w-full p-2 border rounded mb-4"
        />
        <button className="py-2 px-4 bg-yellow-700 text-white rounded">Add Choice</button>
      </div>
    </div>
  );
};

export default ContentBody;
