import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

const login = async (user_name, password) => {
  try {
    const response = await axios.post(`${API_URL}/login-v1`, { user_name, password });
    return response.data.token;
  } catch (error) {
    throw Error('Error logging in');
  }
};

export { login };
