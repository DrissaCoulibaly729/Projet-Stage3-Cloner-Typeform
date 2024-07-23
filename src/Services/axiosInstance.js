import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/v1', // Assurez-vous de remplacer par l'URL correcte de votre API
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
});

const axiosGoogleInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Base URL pour les API Google sans le préfixe /v1
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
});

const axiosPlayInstance = axios.create({
    baseURL: 'https://play.google.com',
    withCredentials: true // Permet l'envoi des informations d'identification
  });

export { axiosInstance, axiosGoogleInstance, axiosPlayInstance };
