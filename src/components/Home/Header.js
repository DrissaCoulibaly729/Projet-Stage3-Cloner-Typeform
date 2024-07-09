import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-white w-full">
      <div className="text-2xl font-bold">Typeform</div>
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="text-gray-700 hover:text-black">Products</a>
        <a href="/" className="text-gray-700 hover:text-black">Solutions</a>
        <a href="/" className="text-gray-700 hover:text-black">Templates</a>
        <a href="/" className="text-gray-700 hover:text-black">Integrations</a>
        <a href="/" className="text-gray-700 hover:text-black">Resources & Support</a>
        <a href="/" className="text-gray-700 hover:text-black">Pricing</a>
      </nav>
      <div className="flex space-x-4">
        <a href='/login' className="text-gray-700">Log in</a>
        <a href='/signup' className="bg-black text-white px-4 py-2 rounded">Sign up</a>
      </div>
    </header>
  );
};

export default Header;
