import React, { useReducer, useEffect, createContext, useContext } from 'react';

import { storage } from '../../utils/storage';
import { VIDEO_STORAGE_KEY } from '../../utils/constants';
import { fetchVideos, setSearchItem, setCurrentVideo } from './video.actions';
import { videoReducer, initialState } from './video.reducer';

const VideoContext = createContext(null);

function useVideo() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function lazyInit(state) {
  return {
    ...state,
    video: storage.get(VIDEO_STORAGE_KEY),
  };
}

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState, lazyInit);

  useEffect(() => {
    if (state.video) {
      storage.set(VIDEO_STORAGE_KEY, state.video);
    } else {
      storage.remove(VIDEO_STORAGE_KEY);
    }
  }, [state.video]);

  const value = {
    loading: state.loading,
    error: state.error,
    videos: state.videos,
    video: state.video,
    searchItem: state.searchItem,
    fetchVideos: fetchVideos(dispatch),
    setSearchItem: setSearchItem(dispatch),
    setCurrentVideo: setCurrentVideo(dispatch),
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export { useVideo };
export default VideoProvider;
