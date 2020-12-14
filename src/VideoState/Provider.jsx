import React, { useReducer, createContext, useContext } from 'react';
import he from 'he';
import { reducer, initialState } from './Reducer';
import { ACTIONS } from './Actions';
import getVideos from '../api/youtube';

const VideoContext = createContext(null);

function useVideoContext() {
  const context = useContext(VideoContext);
  return context;
}

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchVideos = (dptch) => async (search) => {
    dptch({ type: ACTIONS.FETCH_VIDEOS });
    try {
      const results = await getVideos(search);
      const filteredVideos = results.filter((video) => video.id.kind === 'youtube#video');
      const videos = filteredVideos.map((item) => {
        const { snippet, id } = item;
        return {
          id: id.videoId,
          title: snippet.title && he.decode(snippet.title),
          description: snippet.description && he.decode(snippet.description),
          author: snippet.channelTitle,
          img: snippet.thumbnails.high.url,
          url: `https://www.youtube.com/watch?v=${id.videoId}`,
        };
      });
      dptch({ type: ACTIONS.FETCH_SUCCESS, payload: { videos } });
      return videos;
    } catch (error) {
      dptch({ type: ACTIONS.FETCH_ERROR, payload: { error: error.message }});
      return null;
    }
  };
  const setCurrentVideo = (dptch, states) => async (id) => {
    const { favorites, videos } = states;
    const currentVideo = videos.concat(favorites).filter((item) => item.id === id);
    dptch({ type: ACTIONS.CURRENT_VIDEO, payload: { currentVideo } });
  };

  const setFavorites = (dptch, states) => async (video) => {
    const { favorites } = states;
    const index = favorites.findIndex((item) => item.id === video.id);
    if (index === -1) {
      favorites.push(video);
    }
    dptch({ type: ACTIONS.SET_FAVORITES, payload: { favorites } });
  };

  const removeFavorites = (dptch, states) => async (video) => {
    const { favorites } = states;
    const index = favorites.findIndex((item) => item.id === video.id);
    if (index >= 0) {
      favorites.splice(index, 1);
    }
    dptch({ type: ACTIONS.REMOVE_FAVORITES, payload: { favorites } });
  };

  const value = {
    loading: state.loading,
    error: state.error,
    videos: state.videos,
    fetchVideos: fetchVideos(dispatch),
    currentVideo: state.currentVideo,
    setCurrentVideo: setCurrentVideo(dispatch, state),
    setFavorites: setFavorites(dispatch, state),
    removeFavorites: removeFavorites(dispatch, state),
    favorites: state.favorites,
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export { useVideoContext };
export default VideoProvider;
