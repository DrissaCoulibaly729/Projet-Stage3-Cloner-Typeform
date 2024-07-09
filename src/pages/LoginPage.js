import React from 'react';


const LoginPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen p-8 ">
      <div className="flex justify-end items-center w-full">
        <div className="flex items-center">
          <span className="text-gray-500 mr-4">Don't have an account yet?</span>
          <a href="/signup" className="text-gray-700 border border-gray-300 px-4 py-2 rounded mr-4">Sign up</a>
          <a href="/" className="text-gray-700  border-gray-300 px-4 py-2 rounded">Contact us</a>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className=" p-8  rounded max-w-md w-full">
          <h1 className="text-3xl font-bold mb-2 text-center">Typeform</h1>
          <p className="text-center mb-8">Hello, who's this?</p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded"
                placeholder="bruce@wayne.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded"
                placeholder="At least 8 characters"
              />
              <a href="/" className="text-blue-500 text-sm">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded mb-4"
            >
              Log in to Typeform
            </button>
          </form>
          <div className="text-center text-gray-500 mb-4">OR</div>
          <button
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center"
          >
            <img src="/svg/icons8-google.svg" alt="Google" className="mr-2" />
            Log in with Google
          </button>
          <button
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center"
          >
            <img src="/svg/icons8-microsoft.svg" alt="Microsoft" className="mr-2" /> Log in with Microsoft
          </button>
          <a href="/" className="block text-center text-blue-500">Log in with SSO</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
