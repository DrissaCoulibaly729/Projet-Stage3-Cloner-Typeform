// services/axios.services.js

// Import de l'instance d'axios
import { axiosInstance, axiosGoogleInstance } from './axiosInstance';

// Services pour les Workspaces
export const getAllWorkspaces = async () => {
  try {
    const response = await axiosInstance.get('/workspaces');
    const rawData = response.data;
  
      console.log('Raw data:', rawData); // Affichez les données brutes pour débogage
  
      // Trouvez le début de la chaîne JSON après les en-têtes HTTP
      const jsonStartIndex = rawData.indexOf('[{');
      if (jsonStartIndex === -1) {
        throw new Error('Invalid response format');
      }
  
      // Extrayez la chaîne JSON
      const jsonDataString = rawData.slice(jsonStartIndex);
  
      // Parsez la chaîne JSON
      const workspaceData = JSON.parse(jsonDataString);
  
      return workspaceData;
  } catch (error) {
    console.error('Error fetching workspaces:', error);
    throw error;
  }
};

export const createWorkspace = async (workspaceData) => {
  try {
    const response = await axiosInstance.post('/workspaces', workspaceData);
    const rawData = response.data;
      const jsonStartIndex = rawData.indexOf('{');
      const jsonDataString = rawData.slice(jsonStartIndex);
      const workspacesData = JSON.parse(jsonDataString);
  
      return workspacesData;
  } catch (error) {
    console.error('Error creating workspace:', error);
    throw error;
  }
};

export const getWorkspaceById = async (id) => {
  try {
    const response = await axiosInstance.get(`/workspaces/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching workspace with id ${id}:`, error);
    throw error;
  }
};

export const updateWorkspace = async (id, workspaceData) => {
  try {
    const response = await axiosInstance.put(`/workspaces/${id}`, workspaceData);
    return response.data;
  } catch (error) {
    console.error(`Error updating workspace with id ${id}:`, error);
    throw error;
  }
};

export const deleteWorkspace = async (id) => {
  try {
    const response = await axiosInstance.delete(`/workspaces/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting workspace with id ${id}:`, error);
    throw error;
  }
};

// Services pour les Formulaires
export const getAllForms = async () => {
  try {
    const response = await axiosInstance.get('/forms');
    return response.data;
  } catch (error) {
    console.error('Error fetching forms:', error);
    throw error;
  }
};

export const createForm = async (formData) => {
  try {
    const response = await axiosInstance.post('/forms', formData);
    return response.data;
  } catch (error) {
    console.error('Error creating form:', error);
    throw error;
  }
};

export const getWorkspacesByUserId = async (userId) => {
    try {
      // Envoie une requête GET pour récupérer les workspaces
      const response = await axiosInstance.get(`/workspaces/${userId}/users`);
      const rawData = response.data;

    // Vérifiez si rawData est une chaîne de caractères et contient les données JSON attendues
    if (typeof rawData === 'string') {
      const jsonStartIndex = rawData.indexOf('[');
      const jsonDataString = rawData.slice(jsonStartIndex);
      const workspaceData = JSON.parse(jsonDataString);
      return workspaceData;
    }

    return rawData;
      // Retourne les données JSON
    } catch (error) {
      // Gère les erreurs
      console.error('Error fetching workspaces:', error);
      throw error; // Rejette l'erreur pour que l'appelant puisse la gérer
    }
  };

  export const getFormsByWorkspaceId = async (workspaceId) => {
    try {
      const response = await axiosInstance.get(`/workspace/${workspaceId}/forms`);
      const rawData = response.data;
  
      console.log('Raw data:', rawData); // Affichez les données brutes pour débogage
  
      // Trouvez le début de la chaîne JSON après les en-têtes HTTP
      const jsonStartIndex = rawData.indexOf('[{');
      if (jsonStartIndex === -1) {
        throw new Error('Invalid response format');
      }
  
      // Extrayez la chaîne JSON
      const jsonDataString = rawData.slice(jsonStartIndex);
  
      // Parsez la chaîne JSON
      const workspaceData = JSON.parse(jsonDataString);
  
      return workspaceData;
    } catch (error) {
      console.error('Error fetching forms:', error);
      throw error;
    }
  };

export const getFormById = async (id) => {
  try {
    const response = await axiosInstance.get(`/forms/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching form with id ${id}:`, error);
    throw error;
  }
};

export const updateForm = async (id, formData) => {
  try {
    const response = await axiosInstance.put(`/forms/${id}`, formData);
    return response.data;
  } catch (error) {
    console.error(`Error updating form with id ${id}:`, error);
    throw error;
  }
};

export const deleteForm = async (id) => {
  try {
    const response = await axiosInstance.delete(`/forms/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting form with id ${id}:`, error);
    throw error;
  }
};

// Services pour les Questions
export const getAllQuestions = async () => {
  try {
    const response = await axiosInstance.get('/questions');
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const createQuestion = async (questionData) => {
  try {
    const response = await axiosInstance.post('/questions', questionData);
    return response.data;
  } catch (error) {
    console.error('Error creating question:', error);
    throw error;
  }
};

export const getQuestionById = async (id) => {
  try {
    const response = await axiosInstance.get(`/questions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching question with id ${id}:`, error);
    throw error;
  }
};

export const updateQuestion = async (id, questionData) => {
  try {
    const response = await axiosInstance.put(`/questions/${id}`, questionData);
    return response.data;
  } catch (error) {
    console.error(`Error updating question with id ${id}:`, error);
    throw error;
  }
};

export const deleteQuestion = async (id) => {
  try {
    const response = await axiosInstance.delete(`/questions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting question with id ${id}:`, error);
    throw error;
  }
};

// Services pour les Réponses
export const getAllResponses = async () => {
  try {
    const response = await axiosInstance.get('/responses');
    return response.data;
  } catch (error) {
    console.error('Error fetching responses:', error);
    throw error;
  }
};

export const createResponse = async (responseData) => {
  try {
    const response = await axiosInstance.post('/responses', responseData);
    return response.data;
  } catch (error) {
    console.error('Error creating response:', error);
    throw error;
  }
};

export const getResponseById = async (id) => {
  try {
    const response = await axiosInstance.get(`/responses/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching response with id ${id}:`, error);
    throw error;
  }
};

export const updateResponse = async (id, responseData) => {
  try {
    const response = await axiosInstance.put(`/responses/${id}`, responseData);
    return response.data;
  } catch (error) {
    console.error(`Error updating response with id ${id}:`, error);
    throw error;
  }
};

export const deleteResponse = async (id) => {
  try {
    const response = await axiosInstance.delete(`/responses/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting response with id ${id}:`, error);
    throw error;
  }
};

// Services pour les Utilisateurs
export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axiosInstance.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with id ${id}:`, error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with id ${id}:`, error);
    throw error;
  }
};

export const getUser = async (token) => {
    try {
      const response = await axiosInstance.get('http://localhost:8000/api/v1/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Response from getUser:', response);
  
      // Extraire la chaîne de données et parser le JSON
      const rawData = response.data;
      const jsonStartIndex = rawData.indexOf('{');
      const jsonDataString = rawData.slice(jsonStartIndex);
      const userData = JSON.parse(jsonDataString);
  
      return userData;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };
export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', { email, password });
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const getProtectedData = async () => {
  const token = localStorage.getItem('auth_token');
  try {
    const response = await axiosInstance.get('/protected-route', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('Protected data:', response.data);
    return response.data; // Retourner les données si nécessaire
  } catch (error) {
    console.error('Error fetching protected data:', error);
    throw error; // Propager l'erreur pour la gestion ultérieure
  }
};
// Service pour l'authentification Google
export const googleAuth = async () => {
    try {
        const response = await axiosGoogleInstance.get('/google/login');
        window.location.href = response.request.responseURL;
    } catch (error) {
        console.error('Error during Google authentication:', error);
        throw error;
    }
};

// Ajouter des services pour le callback si nécessaire
export const googleCallback = async (data) => {
    try {
        const response = await axiosGoogleInstance.post('/google/callback', data);
        return response.data;
    } catch (error) {
        console.error('Error during Google callback:', error);
        throw error;
    }
};

export const sendAuthCode = async (code) => {
  try {
      const response = await axiosGoogleInstance.post('/google/google-auth', { code });
      return response.data; // Retourne les données de réponse, y compris le token
  } catch (error) {
      console.error('Error sending authorization code:', error);
      throw error;
  }
};


