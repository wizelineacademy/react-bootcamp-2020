import React, { useReducer } from 'react';
import favoritesReducer, { InitialState } from './favorites.reducer';

const FavoritesContext = React.createContext(null);

function FavoritesProvider({ children }) {
  const [favoritesState, favoritesDispatch] = useReducer(favoritesReducer, InitialState);

  return (
    <FavoritesContext.Provider value={{ favoritesState, favoritesDispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext };
export default FavoritesProvider;
