import React, { useReducer, useEffect } from 'react';
import favoritesReducer, { InitialState, LocalKey } from './favorites.reducer';

const FavoritesContext = React.createContext(null);

function FavoritesProvider({ children }) {
  const [favoritesState, favoritesDispatch] = useReducer(favoritesReducer, InitialState);

  useEffect(() => {
    localStorage.setItem(LocalKey, JSON.stringify(favoritesState));
  }, [favoritesState]);

  return (
    <FavoritesContext.Provider value={{ favoritesState, favoritesDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext };
export default FavoritesProvider;
