import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Login = () => {
  const [credentials, setCredentials] = useState({ user_name: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(credentials);
      console.log(response);
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_name" value={credentials.user_name} onChange={handleChange} placeholder="Username" />
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
