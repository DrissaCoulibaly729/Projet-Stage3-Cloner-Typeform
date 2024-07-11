import React from 'react';
import {
  AiOutlineFontSize,
  AiOutlineCheckSquare,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineGlobal,
  AiOutlineStar,
  AiOutlineCalendar,
  AiOutlineFileAdd,
  AiOutlineGoogle,
  AiOutlineEye,
} from 'react-icons/ai';
import { FaRegAddressCard, FaRegImages } from 'react-icons/fa';
import { MdOutlineCategory, MdOutlineFormatListBulleted } from 'react-icons/md';
import { BiToggleLeft, BiText, BiUpload } from 'react-icons/bi';
import { RiPagesLine } from 'react-icons/ri';
import {  FiChevronDown } from 'react-icons/fi';

const categories = [
  {
    name: 'Recommended',
    items: [
      { label: 'Short Text', icon: AiOutlineFontSize, bgColor: 'bg-blue-100' },
      { label: 'Multiple Choice', icon: AiOutlineCheckSquare, bgColor: 'bg-purple-100' },
      { label: 'Statement', icon: AiOutlineFileText, bgColor: 'bg-gray-100' },
      { label: 'Opinion Scale', icon: AiOutlineStar, bgColor: 'bg-green-100' },
      { label: 'Email', icon: AiOutlineMail, bgColor: 'bg-yellow-100' },
    ],
  },
  {
    name: 'Contact Info',
    items: [
      { label: 'Contact Info', icon: FaRegAddressCard, bgColor: 'bg-yellow-100' },
      { label: 'Email', icon: AiOutlineMail, bgColor: 'bg-yellow-100' },
      { label: 'Phone Number', icon: AiOutlinePhone, bgColor: 'bg-yellow-100' },
      { label: 'Address', icon: AiOutlineGlobal, bgColor: 'bg-yellow-100' },
      { label: 'Website', icon: AiOutlineGlobal, bgColor: 'bg-yellow-100' },
    ],
  },
  {
    name: 'Choice',
    items: [
      { label: 'Multiple Choice', icon: AiOutlineCheckSquare, bgColor: 'bg-purple-100' },
      { label: 'Dropdown', icon: FiChevronDown, bgColor: 'bg-purple-100' },
      { label: 'Picture Choice', icon: FaRegImages, bgColor: 'bg-purple-100' },
      { label: 'Yes/No', icon: BiToggleLeft, bgColor: 'bg-purple-100' },
      { label: 'Legal', icon: MdOutlineCategory, bgColor: 'bg-purple-100' },
    ],
  },
  {
    name: 'Rating & Ranking',
    items: [
      { label: 'Net Promoter Score®', icon: AiOutlineStar, bgColor: 'bg-green-100' },
      { label: 'Opinion Scale', icon: AiOutlineStar, bgColor: 'bg-green-100' },
      { label: 'Rating', icon: AiOutlineStar, bgColor: 'bg-green-100' },
      { label: 'Ranking', icon: MdOutlineFormatListBulleted, bgColor: 'bg-green-100' },
      { label: 'Matrix', icon: MdOutlineCategory, bgColor: 'bg-green-100' },
    ],
  },
  {
    name: 'Text',
    items: [
      { label: 'Long Text', icon: BiText, bgColor: 'bg-blue-100' },
      { label: 'Short Text', icon: BiText, bgColor: 'bg-blue-100' },
      { label: 'Video', icon: AiOutlineEye, bgColor: 'bg-orange-100' },
    ],
  },
  {
    name: 'Other',
    items: [
      { label: 'Number', icon: AiOutlineFileAdd, bgColor: 'bg-yellow-100' },
      { label: 'Date', icon: AiOutlineCalendar, bgColor: 'bg-yellow-100' },
      { label: 'Payment', icon: AiOutlineFileAdd, bgColor: 'bg-yellow-100' },
      { label: 'File Upload', icon: BiUpload, bgColor: 'bg-yellow-100' },
      { label: 'Google Drive', icon: AiOutlineGoogle, bgColor: 'bg-yellow-100' },
      { label: 'Calendly', icon: AiOutlineCalendar, bgColor: 'bg-yellow-100' },
    ],
  },
  {
    name: 'Welcome Screen',
    items: [
      { label: 'Welcome Screen', icon: RiPagesLine, bgColor: 'bg-gray-100' },
      { label: 'Statement', icon: AiOutlineFileText, bgColor: 'bg-gray-100' },
      { label: 'Question Group', icon: AiOutlineFileAdd, bgColor: 'bg-gray-100' },
      { label: 'Multi-Question Page', icon: RiPagesLine, bgColor: 'bg-gray-100' },
      { label: 'End Screen', icon: RiPagesLine, bgColor: 'bg-gray-100' },
      { label: 'Redirect to URL', icon: AiOutlineGlobal, bgColor: 'bg-gray-100' },
    ],
  },
];

const FormContent = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl">
        <div className="border-b p-4 flex justify-between items-center">
          <div className="text-lg font-semibold">My workspace &gt; My new form</div>
          <div className="flex space-x-4">
            <button className="bg-gray-200 px-4 py-2 rounded">Add content</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Import questions</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Create with AI</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Qualify leads</button>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <div key={category.name}>
                <h3 className="mb-2 text-sm font-medium text-gray-600">{category.name}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-2 ${item.bgColor} rounded`}
                    >
                      <item.icon className="mr-2 text-gray-600" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContent;
