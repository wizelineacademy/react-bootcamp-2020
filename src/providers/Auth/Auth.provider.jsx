import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import LoginApi from '../../utils/loginApi';

const AuthContext = React.createContext({});

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const mockedData = new Array(16).fill(null);
  const [state, setState] = useState({
    sidenav: true,
    searchString: 'wizeline',
    videos: mockedData,
  });

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(async (user) => {
    try {
      const mockedUser = await LoginApi(user);
      setAuthenticated(true);
      storage.set(AUTH_STORAGE_KEY, true);
      storage.set('AUTH_STORAGE_USER', mockedUser);
      return true;
    } catch (err) {
      return err.toString();
    }
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    storage.set('AUTH_STORAGE_USER', false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, state, setState }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
