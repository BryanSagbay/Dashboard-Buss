import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Dashboard = () => {
  const handleLogout = () => {
    AuthService.logout();
  };

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Dashboard;
