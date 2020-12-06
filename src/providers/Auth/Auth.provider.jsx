import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import loginApi from '../Login';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
    setUserData(lastAuthState);
  }, []);

  const login = useCallback(async (user, pass) => {
    try {
      setError('');
      const response = await loginApi(user, pass);
      console.log(response);
      setAuthenticated(true);
      setUserData(response);
      storage.set(AUTH_STORAGE_KEY, response);
    } catch (e) {
      setError(e.message);
      setAuthenticated(false);
      setUserData([]);
      storage.set(AUTH_STORAGE_KEY, false);
    }
  }, []);

  const logout = useCallback(() => {
    setError('');
    setAuthenticated(false);
    setUserData([]);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, userData, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
