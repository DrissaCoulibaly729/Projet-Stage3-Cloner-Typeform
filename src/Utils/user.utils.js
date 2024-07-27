// user.utils.js
import { getUser } from '../Services/axios.services';

export const fetchUserData = async () => {
  try {
    const token = localStorage.getItem('auth_token');
    console.log('Token:', token);

    if (!token) {
      throw new Error('No token found in localStorage');
    }

    const userData = await getUser(token);
    console.log('UserData:', userData);

    const userArray = [
      { key: 'ID', value: userData.id },
      { key: 'Email', value: userData.email },
      { key: 'Nom', value: userData.firstname },
      { key: 'Prenom', value: userData.lastname },
      { key: 'Created At', value: userData.created_at },
    ];

    return userArray;
  } catch (error) {
    console.error('Error in fetchUserData:', error);
    return [];
  }
};
