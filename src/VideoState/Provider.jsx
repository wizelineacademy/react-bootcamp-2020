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
      const filterVideos = results.filter((video) => video.id.kind === 'youtube#video');
      const videos = filterVideos.map((item) => {
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
      console.log(videos);
      dptch({ type: ACTIONS.FETCH_SUCCESS, payload: { videos } });
      return videos;
    } catch (error) {
      dptch({ type: ACTIONS.FETCH_ERROR, payload: { error: error.message }});
      return null;
    }
  };
  const setCurrentVideo = (dptch) => async (id, videoList) => {

    const currentVideo = videoList.filter((item) => item.id === id);
    console.log(currentVideo);
    dptch({ type: ACTIONS.CURRENT_VIDEO, payload: { currentVideo } });
  };

  const value = {
    loading: state.loading,
    error: state.error,
    videos: state.videos,
    fetchVideos: fetchVideos(dispatch),
    currentVideo: state.currentVideo,
    setCurrentVideo: setCurrentVideo(dispatch),
  };

  return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export { useVideoContext };
export default VideoProvider;
