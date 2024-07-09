import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center p-6 bg-white">
      <div className="flex items-center">
        <div className="text-2xl font-bold">Typeform</div>
        <nav className="hidden md:flex md:ml-6 space-x-6">
          <a href="/" className="text-gray-700 hover:text-black">Products</a>
          <a href="/" className="text-gray-700 hover:text-black">Solutions</a>
          <a href="/" className="text-gray-700 hover:text-black">Templates</a>
          <a href="/" className="text-gray-700 hover:text-black">Integrations</a>
          <a href="/" className="text-gray-700 hover:text-black">Resources & Support</a>
          <a href="/" className="text-gray-700 hover:text-black">Pricing</a>
        </nav>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <nav className="md:hidden flex ml-auto space-x-4">
          <button className="text-gray-700">Log in</button>
          <button className="bg-black text-white px-4 py-2 rounded">Sign up</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
