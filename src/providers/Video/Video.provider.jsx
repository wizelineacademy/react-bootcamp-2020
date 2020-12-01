import React, { useCallback, useState, useEffect, useRef } from 'react';

import fetchYoutubeVideos from '../../utils/api/fetchYoutubeVideos';

const VideoContext = React.createContext();

function VideoProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentVideo, setCurrentVideo] = useState({});
  const [videos, setVideos] = useState([]);

  const stateRef = useRef();
  stateRef.current = searchTerm;

  const fetchVideos = useCallback(() => {
    const fetchedVideos = fetchYoutubeVideos(stateRef.current);

    setVideos(fetchedVideos);
  }, []);

  useEffect(() => {
    setSearchTerm('Wizeline');
    const fetchedVideos = fetchYoutubeVideos('Wizeline');
    setVideos(fetchedVideos);
    setCurrentVideo({});
  }, []);

  return (
    <VideoContext.Provider
      value={{
        fetchVideos,
        searchTerm,
        setSearchTerm,
        setCurrentVideo,
        videos,
        currentVideo,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export { VideoContext };
export default VideoProvider;
