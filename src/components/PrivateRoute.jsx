import {React, useState,useEffect}  from 'react';
import {  Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

function useAuth() {
    const [loggedIn, setLoggedIn] = useState(false);
  
    useEffect(() => {
      const token = AuthService.getToken();
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, []);
  
    return loggedIn;
  }
  

export default function PrivateRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}