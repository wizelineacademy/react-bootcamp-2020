import React, { createContext, useContext, useState, useEffect } from 'react';
import getFavs from '../services/getFavourites';

const UserContext = createContext({});

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(`Can't use "useUserContext" without an UserProvider!`);
  }
  return context;
}

const UserProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  // localStorage.setItem('videosFavourites', JSON.stringify(favorites));
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));

  useEffect(() => {
    if (!jwt) return setFavorites([]);
    getFavs({ jwt }).then(setFavorites);
  }, [jwt]);

  return (
    <UserContext.Provider
      value={{
        favorites,
        setFavorites,
        jwt,
        setJWT,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext };
export default UserProvider;
