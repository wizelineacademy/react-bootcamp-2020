import React, { useState, useContext, useCallback, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { USER_PREFERENCES_KEY } from '../../utils/constants';

const FavoritesContext = React.createContext(null);

function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavorites" without an AuthProvider!`);
  }
  return context;
}

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const preferences = storage.get(USER_PREFERENCES_KEY);
    if (preferences) {
      setFavorites(preferences);
    }
  }, []);

  const addToFavorites = useCallback((videos) => {
    setFavorites(videos);
    storage.set(USER_PREFERENCES_KEY, videos);
  }, []);

  return (
    <FavoritesContext.Provider value={{ addToFavorites, favorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { useFavorites };
export default FavoritesProvider;
