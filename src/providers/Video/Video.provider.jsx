import React, { useCallback, useState, useRef, useEffect } from 'react';
import youtube from '../../utils/api/youtube.api';

const VideoContext = React.createContext();

function VideoProvider({ children }) {
  const [searchSentence, setSearchSentence] = useState('');
  const [currentVideo, setCurrentVideo] = useState({});
  const [videos, setVideos] = useState(null);

  const stateRef = useRef();
  stateRef.current = searchSentence;

  const getVideos = useCallback(async () => {
    const { data } = await youtube.search(stateRef.current);
    setVideos(data.items);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { data } = await youtube.search('');
      setVideos(data.items);
      setCurrentVideo({});
    }
    fetchData();
  }, []);

  return (
    <VideoContext.Provider
      value={{
        getVideos,
        searchSentence,
        setSearchSentence,
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
