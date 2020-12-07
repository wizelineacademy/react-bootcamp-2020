import React, { useState, useEffect, useContext, createContext } from 'react';
import { arrayEqualsTo } from '../../utils/functions';
import { search, getFavorites } from '../../utils/api';

const VideoContext = createContext(null);
const useVideos = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideos needs a valid VideoProvider');
  }
  return context;
};

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [searchParams, setSearchParams] = useState(['baby', 'otter']);
  const [showFavorites, setShowFavorites] = useState(false);

  const getSearchData = async () => {
    // uncomment for prod
    const response = await search(searchParams);
    setVideos(response);
  };

  const getFavoritesData = async () => {
    const response = await getFavorites();
    setVideos(response);
  };

  // Trigger search function whenever the search params are updated.
  useEffect(() => {
    getSearchData();
  }, [searchParams]);

  // Trigger getFavorites function whenever the favorite toggle is updated
  useEffect(() => {
    if (showFavorites) {
      getFavoritesData();
    } else {
      getSearchData();
    }
  }, [showFavorites]);

  const handleSearchParams = (params) => {
    if (!arrayEqualsTo(params, searchParams)) {
      setSearchParams(params);
    }
  };

  const toggleFavorites = (show) => {
    setShowFavorites(show);
  };

  return (
    <VideoContext.Provider
      value={{
        videos,
        searchParams,
        handleSearchParams,
        toggleFavorites,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export { useVideos };
export default VideoProvider;
