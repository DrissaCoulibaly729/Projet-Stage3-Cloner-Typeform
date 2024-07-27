import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import { sendAuthCode } from '../../Services/axios.services';

const RightSection = () => {
  const navigate = useNavigate(); // Utiliser useNavigate pour obtenir la fonction de navigation

  useEffect(() => {
    const loadGapiScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load gapi'));
        document.body.appendChild(script);
      });
    };

    loadGapiScript().then(() => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '998605323378-u2sd9c3e4785fmjgem31lp25p5u2s918.apps.googleusercontent.com',
          scope: 'email profile',
        }).then(() => {
          console.log('GoogleAuth initialized successfully');
        }).catch(error => {
          console.error('Error initializing gapi client:', error);
        });
      });
    }).catch(error => {
      console.error('Failed to load gapi script:', error);
    });
  }, []);

  const beginGoogleAuth = () => {
    if (window.gapi && window.gapi.auth2) {
      const googleAuth = window.gapi.auth2.getAuthInstance();
      if (googleAuth) {
        console.log('GoogleAuth Instance:', googleAuth); // Vérifiez ici
        googleAuth.grantOfflineAccess({
          prompt: 'select_account',
          redirect_uri: 'http://localhost:3000/auth/callback',
          scope: 'email profile',
        }).then(async response => {
          console.log('Google Auth Response:', response); // Vérifiez ici
          
          if (response && response.code) {
            try {
              const data = await sendAuthCode(response.code);
              console.log('Token Response Data:', data);
              if (data.token) {
                console.log('Token:', data.token);
                // Utilisez le token comme nécessaire
              } else {
                console.error('Token not received or invalid:', data);
              }
            } catch (error) {
              console.error('Error handling token response:', error.response ? error.response.data : error.message);
            }
          } else {
            console.error('Google Auth Response does not contain a code.');
          }
        }).catch(error => {
          console.error('Google authentication failed:', error);
          alert('An error occurred during Google login. Please try again.');
        });
      } else {
        console.error('GoogleAuth is not initialized');
      }
    } else {
      console.error('gapi or gapi.auth2 is not available');
    }
  };

  const redirectEmail = () => {
    navigate('/signupwithmail'); 
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
          <button
            onClick={beginGoogleAuth}
            className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center"
          >
            <img src="/svg/icons8-google.svg" alt="Google" className="mr-2" /> Sign up with Google
          </button>
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded mb-4 flex justify-center items-center">
            <img src="/svg/icons8-microsoft.svg" alt="Microsoft" className="mr-2" /> Sign up with Microsoft
          </button>
          <div className="text-gray-500 mb-4">OR</div>
          <button onClick={redirectEmail} className="w-full bg-black text-white py-2 rounded">Sign up with email</button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
