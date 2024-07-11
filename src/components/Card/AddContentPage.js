import React from 'react';
import { AiOutlinePlus, AiOutlineImport, AiOutlineRobot, AiOutlineCheckSquare } from 'react-icons/ai';
import OptionCard from './OptionCard'; // Assurez-vous que le chemin est correct

const AddContentPage = () => {
  const options = [
    { Icon: AiOutlinePlus, title: 'Start from scratch', text: 'Build from a list of available content types', bgColor: 'bg-blue-100' },
    { Icon: AiOutlineImport, title: 'Import questions', text: 'Copy and paste questions or import from Google Forms', bgColor: 'bg-yellow-100' },
    { Icon: AiOutlineRobot, title: 'Create with AI', text: 'Generate custom questions with AI and get inspired', bgColor: 'bg-purple-100' },
    { Icon: AiOutlineCheckSquare, title: 'Qualify leads', text: 'Score and qualify leads with our AI solution', bgColor: 'bg-green-100' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl text-center mb-8">Select an option to add content</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {options.map((option, index) => (
          <OptionCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

export default AddContentPage;
