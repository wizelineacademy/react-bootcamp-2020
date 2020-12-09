import React, { createContext, useReducer } from 'react';
import { authReducer } from './authReducer';
import { videoReducer } from './videoReducer';
import { favoritesReducer } from './favoritesReducer';

// const initFav = () => {
//   return JSON.parse(localStorage.getItem(`videos_wizeline`)) || [];
// };

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(authReducer, {
    name: '',
    logged: false,
  });
  const [video, videoDispatch] = useReducer(videoReducer, {
    query: 'wizeline',
    channelName: '',
    title: '',
    videoId: '',
    description: '',
    img: '',
  });
  const [favorite, favoriteDispatch] = useReducer(favoritesReducer, []);

  return (
    <GlobalContext.Provider
      value={{ user, userDispatch, video, videoDispatch, favorite, favoriteDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
