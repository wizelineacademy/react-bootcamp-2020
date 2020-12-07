import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import loginApi from '../../utils/loginApi';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}
export { useAuth };

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback((username, password) => {
    loginApi(username, password).then(
      (result) => {
        setUser(result);
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
      },
      (err) => {
        setError(err);
      }
    );
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, user, error }}>
      {children}
    </AuthContext.Provider>
  );
}
