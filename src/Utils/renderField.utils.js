// src/Utils/renderfield.utils.js
import React from 'react';

export const renderField = (id, label, placeholder, setOptions, options) => {
  switch (label) {
    case 'Short Text':
    case 'Number':
    case 'Email':
    case 'Website':
    case 'Phone Number':
    case 'Address':
    case 'Video':
      return <input type="text" placeholder={placeholder} className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />;
    case 'Multiple Choice':
    case 'Dropdown':
      return (
        <>
          <select className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition">
            <option value="">{placeholder}</option>
            {options[id]?.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Add option" 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const value = e.target.value;
                setOptions((prevOptions) => {
                  const newOptions = { ...prevOptions };
                  newOptions[id] = [...(newOptions[id] || []), value];
                  return newOptions;
                });
                e.target.value = '';
              }
            }} 
            className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
        </>
      );
    case 'Statement':
    case 'Address':
    case 'Long Text':
      return <textarea placeholder={placeholder} className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />;
    case 'Opinion Scale':
    case 'Rating':
    case 'Net Promoter Score':
      return <input type="range" min="1" max="10" className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />;
    case 'Date':
      return <input type="date" className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />;
    case 'File Upload':
      return <input type="file" className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />;
    case 'yes_no':
      return (
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input type="radio" name={`yes_no_${id}`} value="yes" className="mr-2" />
            Yes
          </label>
          <label className="flex items-center">
            <input type="radio" name={`yes_no_${id}`} value="no" className="mr-2" />
            No
          </label>
        </div>
      );
    case 'Picture Choice':
      return (
        <>
          <input type="file" accept="image/*" className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />
          <input type="text" placeholder="Add option" className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />
        </>
      );
    case 'Legal':
      return <textarea placeholder={placeholder} className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />;
    case 'Ranking':
      return (
        <div>
          {options[id]?.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className="mr-2">{index + 1}.</span>
              <input type="text" value={option} readOnly className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />
            </div>
          ))}
          <input 
            type="text" 
            placeholder="Add item" 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const value = e.target.value;
                setOptions((prevOptions) => {
                  const newOptions = { ...prevOptions };
                  newOptions[id] = [...(newOptions[id] || []), value];
                  return newOptions;
                });
                e.target.value = '';
              }
            }} 
            className="block w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
        </div>
      );
    case 'Matrix':
      return (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Question</th>
              {options[id]?.columns.map((column, index) => (
                <th key={index} className="border border-gray-300 p-2">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {options[id]?.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 p-2">{row}</td>
                {options[id]?.columns.map((column, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 p-2">
                    <input type="radio" name={`matrix_${id}_${rowIndex}`} className="mr-2" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case 'Question Group':
    case 'Multi Question Page':
    case 'End Screen':
    case 'Redirect to URL':
    case 'Welcome Screen':
      return <input type="text" placeholder={placeholder} className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition" />;
    // Add other cases for different labels
    default:
      return null;
  }
};
