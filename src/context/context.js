import React, { createContext, useReducer, useCallback } from 'react';

import reducer from '../reducer/reducer';

const initialState = {
  videos: [],
  currentVideo: null,
  searchQuery: 'Wizeline',
};

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

export const VideoContext = createContext(initialState);
export default VideoProvider;
