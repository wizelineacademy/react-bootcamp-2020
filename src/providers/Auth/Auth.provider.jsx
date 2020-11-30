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
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
    setUserData(lastAuthState);
  }, []);

  const login = useCallback(async (user, pass) => {
    try {
      const response = await loginApi(user, pass);
      console.log(response);
      setAuthenticated(true);
      setUserData(response);
      storage.set(AUTH_STORAGE_KEY, response);
    } catch (e) {
      setAuthenticated(false);
      setUserData([]);
      storage.set(AUTH_STORAGE_KEY, []);
    }
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUserData([]);
    storage.set(AUTH_STORAGE_KEY, []);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
