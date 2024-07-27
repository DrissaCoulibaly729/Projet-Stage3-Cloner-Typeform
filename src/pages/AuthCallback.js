import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { sendAuthCode } from '../Services/axios.services';

const AuthCallback = () => {
  const location = useLocation();
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  // Fonction pour extraire les paramètres de l'URL avec useCallback
  const getCodeFromHash = useCallback(() => {
    const hash = location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('code');
  }, [location.hash]);

  useEffect(() => {
    const fetchAuthCode = async () => {
      try {
        const authCode = getCodeFromHash();
        setCode(authCode);

        if (authCode) {
          // Envoi du code à l'API avec await
          const data = await sendAuthCode(authCode);

          if (data.token) {
            setToken(data.token);
          } else {
            setError('Token not received or invalid.');
          }
        }
      } catch (err) {
        setError(`Error sending authorization code: ${err.message}`);
      }
    };

    fetchAuthCode();
  }, [getCodeFromHash]);

  return (
    <div>
      <h1>{code ? `Authorization Code: ${code}` : 'No code found'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default AuthCallback;
