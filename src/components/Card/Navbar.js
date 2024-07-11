import React from "react";
import { FiHelpCircle } from "react-icons/fi";

const Navbar = () => {
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
                  DC
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
