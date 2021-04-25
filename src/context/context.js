import React, { createContext, useReducer, useCallback, useContext } from 'react';

import reducer from '../reducer/reducer';

const initialState = {
  videos: [],
  currentVideo: null,
  searchQuery: 'Wizeline',
  favouriteVideos: [],
  theme: 'light',
};

const VideoContext = createContext(null);

function useVideosContext() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideoContext" without an VideosProvider!`);
  }
  return context;
}

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setVideos = useCallback(
    (videos) => {
      dispatch({ type: '@get/videos', payload: videos });
    },
    [dispatch]
  );
  const value = { state, dispatch, setVideos };
  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export { useVideosContext };
export default VideoProvider;
