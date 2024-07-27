import React, { useEffect, useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { fetchUserData } from '../../Utils/user.utils'; // Assurez-vous que le chemin est correct

const Navbar = () => {
  const [initials, setInitials] = useState('');

  useEffect(() => {
    const getInitials = async () => {
      const userArray = await fetchUserData();
      const emailData = userArray.find(item => item.key === 'Email')?.value || '';
      const localPart = emailData.split('@')[0];
      const firstTwoLetters = localPart.slice(0, 2).toUpperCase();
      setInitials(firstTwoLetters);
    };

    getInitials();
  }, []);

  return (
    <div className="text-lg font-semibold px-4 sm:px-6 py-4 bg-white text-gray-900">
      <div
        className="max-w-6xl mx-auto"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          fontSize: "14px",
          lineHeight: "20px",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div className="flex justify-between items-center">
          <div className="text-sm sm:text-base">
            My workspace &gt; My new form
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center justify-center w-10 h-10 cursor-pointer bg-white rounded-full shadow">
              <FiHelpCircle className="text-gray-600" />
            </div>
            <div className="relative flex items-center">
              <button className="flex items-center justify-center w-10 h-10 cursor-pointer bg-blue-200 rounded-full shadow focus:outline-none">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                  {initials} 
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
