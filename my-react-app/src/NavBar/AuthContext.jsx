import React, { createContext, useState, useEffect } from 'react';
import * as jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt_decode.jwtDecode(token);
        setIsAdmin(decodedToken.role === 'admin');
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Token decoding failed:', error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  console.log('AuthContext State:', { isLoggedIn, isAdmin });
  const login = (token) => {
    localStorage.setItem('token', token);
    const decodedToken = jwt_decode.jwtDecode(token);
    setIsAdmin(decodedToken.role === 'admin');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
