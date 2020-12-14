import React, { useEffect, useContext, useState, useCallback } from 'react';
import { USERS } from '../../constants';

const UserContext = React.createContext(null);

function useAuth() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = useCallback((name, password) => {
    if (name in USERS && password === USERS[name].password) {
      const { u } = USERS[name];
      sessionStorage.setItem('session', JSON.stringify(u));
      setUser(u);
    } else {
      throw new Error('Invalid credentials');
    }
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('session');
    setUser(null);
  }, []);

  const addFavorite = (videoId) => {
    if (!user.favorites.includes(videoId)) {
      const newUser = { ...user, favorites: [...user.favorites, videoId] };
      setUser(newUser);
      sessionStorage.setItem('session', JSON.stringify(newUser));
    }
  };

  const delFavorite = (videoId) => {
    const newUser = { ...user, favorites: user.favorites.filter((id) => id !== videoId) };
    setUser(newUser);
    sessionStorage.setItem('session', JSON.stringify(newUser));
  };

  useEffect(() => {
    const session = sessionStorage.getItem('session');
    if (session) {
      setUser(JSON.parse(session));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout, addFavorite, delFavorite }}>
      {children}
    </UserContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
