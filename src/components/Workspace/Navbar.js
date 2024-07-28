import React, { useEffect, useState } from 'react';
import { FiGrid, FiHelpCircle } from 'react-icons/fi';
import { fetchUserData } from '../../Utils/user.utils';

const Navbar = () => {
  const [email, setEmail] = useState('');
  const [initial, setInitial] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const userArray = await fetchUserData();
      console.log('UserArray:', userArray);

      if (userArray.length > 0) {
        const emailData = userArray.find(item => item.key === 'Email')?.value || '';
        setEmail(emailData);
        console.log('EmailData:', emailData);

        const localPart = emailData.split('@')[0];
        setInitial(localPart.charAt(0).toUpperCase());
        setDisplayEmail(localPart);
        setInitials(localPart.slice(0, 2).toUpperCase());
      }
    };

    getUserData();
  }, []);
  return (
    <div className="bg-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <FiGrid className="text-gray-500" />
        <h1 className="text-xl font-semibold">My workspace &gt; My new form</h1>
      </div>
      <div className="flex space-x-8">
        <span>Create</span>
        <span>Connect</span>
        <span>Share</span>
        <span>Results</span>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded">Publish</button>
        <button className="bg-yellow-700 text-black px-4 py-2 rounded">View plans</button>
        <FiHelpCircle className="text-gray-500" />
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">{initials}</div>
      </div>
    </div>
  );
};

export default Navbar;
