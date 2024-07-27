import React, { useEffect, useState } from 'react';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';
import { fetchUserData } from '../../Utils/user.utils';

const Header = () => {
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
    <header className="flex justify-between items-center pt-2 px-4 sm:px-6 bg-white">
      <div className="flex items-center mb-2 sm:mb-0">
        <div className="bg-blue-600 text-white p-2 rounded-full">{initial}</div>
        <span className="ml-2">{displayEmail}</span>
        <FiChevronDown className="ml-auto sm:hidden" />
      </div>

      <div className="flex items-center">
        <button className="bg-yellow-700 text-white px-4 py-2 rounded-lg mr-2">View Plan</button>
        <FiHelpCircle className="bg-gray-50 text-xl mr-2" />
        <div className="bg-blue-600 text-white p-2 rounded-full hidden sm:block">{initials}</div>
      </div>
    </header>
  );
};

export default Header;
