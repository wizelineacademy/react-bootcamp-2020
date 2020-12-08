import React, { useCallback, useState, useEffect } from 'react';

import {
  getFavoritesVideos,
  removeFromFavorites,
  addToFavorites,
  isFavoriteVideo,
} from '../../utils/favorites';

const FavoritesContext = React.createContext();

function FavoritesProvider({ children }) {
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const fetchFavorites = useCallback(() => {
    const fetchedVideos = getFavoritesVideos();
    setFavoriteVideos(fetchedVideos);
  }, []);

  const removeFromFavoritesProvider = (video) => {
    removeFromFavorites(video);
    const fetchedVideos = getFavoritesVideos();
    setFavoriteVideos(fetchedVideos);
  };

  const isFavoriteVideoProvider = (video) => {
    return isFavoriteVideo(video);
  };

  const addToFavoritesProvider = (video) => {
    addToFavorites(video);
    const fetchedVideos = getFavoritesVideos();
    setFavoriteVideos(fetchedVideos);
  };

  useEffect(() => {
    function fetchData() {
      const fetchedVideos = getFavoritesVideos();
      setFavoriteVideos(fetchedVideos);
    }
    fetchData();
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favoriteVideos,
        fetchFavorites,
        removeFromFavoritesProvider,
        addToFavoritesProvider,
        isFavoriteVideoProvider,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext };
export default FavoritesProvider;
