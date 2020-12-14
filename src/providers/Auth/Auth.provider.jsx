import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import loginApi from '../../utils/api/login.api';

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
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);
    setAuthenticated(isAuthenticated);
  }, []);

  const login = async (username, password) => {
    try {
      const user = await loginApi(username, password);
      setAuthenticated(true);
      setCurrentUser(user);
      storage.set(AUTH_STORAGE_KEY, true);
    } catch (error) {
      setAuthenticated(false);
      setCurrentUser({});
      storage.set(AUTH_STORAGE_KEY, false);
      throw error;
    }
  };

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
