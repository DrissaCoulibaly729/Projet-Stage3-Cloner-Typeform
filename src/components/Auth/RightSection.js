import React from 'react';
import { FaGlobe } from 'react-icons/fa'; // Assurez-vous d'utiliser l'icône globe de react-icons
import { GoogleLogin } from 'react-google-login'; // Importez le composant GoogleLogin

const RightSection = () => {
  const handleGoogleSuccess = async (response) => {
    try {
      console.log('Google login successful:', response);
      // Vous pouvez envoyer le token à votre backend ici
      // Par exemple : await googleAuth(response.tokenId);
    } catch (error) {
      console.error('Error during Google sign up:', error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <div className="flex flex-col justify-between items-center bg-white w-full md:w-1/2 h-screen ">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center m-0 mb-4 py-2 space-x-15 ">
          <div className="flex items-center ">
            <FaGlobe className="h-5 w-5 text-gray-500 mr-2" />
            <select className="text-gray-500">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
          <div className="flex items-center ">
            <span className="text-gray-500">Already have an account?</span>
            <a href="/login" className="ml-4 px-4 border border-gray-300 rounded text-gray-700">Log in</a>
          </div>
        </div>
        <div className="text-center mt-40">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Typeform</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Get better data with conversational forms, surveys, quizzes & more.
          </p>
          <GoogleLogin
            clientId="998605323378-u2sd9c3e4785fmjgem31lp25p5u2s918.apps.googleusercontent.com" // Remplacez par votre client ID Google
            buttonText="Sign up with Google"
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy={'single_host_origin'}
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center"
            render={renderProps => (
              <button 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled}
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center"
              >
                <img src="/svg/icons8-google.svg" alt="Google" className="mr-2" /> Sign up with Google
              </button>
            )}
          />
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center">
            <img src="/svg/icons8-microsoft.svg" alt="Microsoft" className="mr-2" /> Sign up with Microsoft
          </button>
          <div className="text-gray-500 mb-4">OR</div>
          <button className="w-full bg-black text-white py-2 rounded">Sign up with email</button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
