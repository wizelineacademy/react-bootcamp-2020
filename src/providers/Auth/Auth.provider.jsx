import React, { useState, useEffect, useContext, useCallback } from 'react';

import {
  AUTH_STORAGE_KEY_AUTHENTICATED,
  AUTH_STORAGE_KEY_USERINFO_NAME,
} from '../../utils/constants';

import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}
/*
async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
*/
function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY_AUTHENTICATED);
    const lastUserInfoState = storage.get(AUTH_STORAGE_KEY_USERINFO_NAME);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
    setUserInfo(lastUserInfoState);
  }, []);

  /*
  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);
  */

  async function login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'wizeline' && password === 'Rocks!') {
          setAuthenticated(true);
          setUserInfo(mockedUser.name);
          storage.set(AUTH_STORAGE_KEY_AUTHENTICATED, true);
          storage.set(AUTH_STORAGE_KEY_USERINFO_NAME, mockedUser.name);
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 500);
    });
  }

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUserInfo(null);
    storage.set(AUTH_STORAGE_KEY_AUTHENTICATED, false);
    storage.set(AUTH_STORAGE_KEY_USERINFO_NAME, null);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
