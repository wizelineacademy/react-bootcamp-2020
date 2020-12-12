import React, { useState, useContext } from 'react';

const FavoriteContext = React.createContext(null);

function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error(`Can't use "useFavorite" without a FavoriteProvider!`);
  }
  return context;
}

function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export { useFavorite };
export default FavoriteProvider;
