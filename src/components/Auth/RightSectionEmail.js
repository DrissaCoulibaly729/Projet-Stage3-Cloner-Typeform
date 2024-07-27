import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../Services/axios.services';

const RightSectionEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCheckboxChange = (e) => setAgreeToTerms(e.target.checked);

  const validateForm = () => {
    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return false;
    }
    if (!agreeToTerms) {
      setErrorMessage('You must agree to the terms and conditions to create an account.');
      return false;
    }
    return true;
  };

  const redirectEmail = async () => {
    if (validateForm()) {
      try {
        const userData = { email, password };
        await createUser(userData);
        navigate('/dashboard');
      } catch (error) {
        setErrorMessage('Error creating user. Please try again.');
      }
    }
  };

  return (
    <div className="flex flex-col justify-between items-center bg-white w-full md:w-1/2 h-screen">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center m-0 mb-4 py-2 space-x-15">
          <div className="flex items-center">
            <select className="text-gray-500">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500">Already have an account?</span>
            <a href="/login" className="ml-4 px-4 border border-gray-300 rounded text-gray-700">Log in</a>
          </div>
        </div>
        <div className="text-center mt-40">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Typeform</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Get better data with conversational forms, surveys, quizzes & more.
          </p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-5 bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-5 bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4"
          />
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label className="text-gray-700">
              I agree to Typeform’s <a href="/" className="text-blue-500">Terms of Service</a>, <a href="/" className="text-blue-500">Privacy Policy</a> and <a href="/" className="text-blue-500">Data Processing Agreement</a>.
            </label>
          </div>
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
          <button
            onClick={redirectEmail}
            className="w-full bg-black text-white py-2 rounded"
          >
            Create my free account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSectionEmail;
