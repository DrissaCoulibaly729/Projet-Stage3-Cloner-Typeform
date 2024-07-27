import React, { useState } from 'react';
import { loginUser } from '../Services/axios.services';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await loginUser(email, password);
      
      // Extraction de la chaîne JSON de la réponse
      const responseBody = response.data;
      
      // Trouver la partie JSON dans la chaîne de réponse
      const jsonStartIndex = responseBody.indexOf('{');
      const jsonString = responseBody.substring(jsonStartIndex);
  
      // Convertir la chaîne JSON en objet JavaScript
      const parsedResponse = JSON.parse(jsonString);
  
      // Accéder à l'adresse email
      const userEmail = parsedResponse.Utilisateur.email;
  
      console.log('User Email:', parsedResponse.token);
  
      if (parsedResponse.token) {
        localStorage.setItem('auth_token', parsedResponse.token);
        console.log('Token:', parsedResponse.token);
        window.location.href = '/dashboard';
      } else {
        setErrorMessage('Failed to log in. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Failed to log in. Please try again.');
      console.error('Error logging in:', error);
    }
  };
  
  

  return (
    <div className="flex flex-col justify-between h-screen p-8">
      <div className="flex justify-end items-center w-full">
        <div className="flex items-center">
          <span className="text-gray-500 mr-4">Don't have an account yet?</span>
          <a href="/signup" className="text-gray-700 border border-gray-300 px-4 py-2 rounded mr-4">Sign up</a>
          <a href="/" className="text-gray-700 border-gray-300 px-4 py-2 rounded">Contact us</a>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="p-8 rounded max-w-md w-full">
          <h1 className="text-3xl font-bold mb-2 text-center">Typeform</h1>
          <p className="text-center mb-8">Hello, who's this?</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                placeholder="bruce@wayne.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                placeholder="At least 8 characters"
              />
              <a href="/" className="text-blue-500 text-sm">Forgot password?</a>
            </div>
            {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
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
