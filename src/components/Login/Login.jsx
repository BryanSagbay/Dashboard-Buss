import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../services/AuthService';

const Login = ({ setAuthenticated }) => {
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await login(user_name, password);
      localStorage.setItem('token', token);
      console.log(token);
      setAuthenticated(true);
      history.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={user_name}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
