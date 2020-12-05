import React, { useState, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY, AUTH_IMG_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(Boolean(storage.get(AUTH_STORAGE_KEY)) || false);

  const login = useCallback((user) => {
    setAuthenticated(true);
    storage.set(AUTH_IMG_STORAGE_KEY, user.avatarUrl);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set(AUTH_IMG_STORAGE_KEY, null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
