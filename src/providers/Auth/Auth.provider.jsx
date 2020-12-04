import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY,USER_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { useAppDataContext } from '../AppData';
import actions from "../../state/actions"
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
  const {dispatch}=useAppDataContext();


  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
    const user=storage.get(USER_STORAGE_KEY)
    dispatch({type:actions.SET_USER,payload:user});
    
  }, [dispatch]);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
