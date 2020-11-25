import React, { useCallback, useState, useEffect, useRef } from 'react';

const VideoContext = React.createContext();
const videosMock = [
  {
    videoId: '33445',
    title: 'video 1',
    description: 'description 1 description 1',
    imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    searchTerm: 'Wizeline',
  },
  {
    videoId: '6666',
    title: 'video 2',
    description: 'description 2 description 2',
    imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    searchTerm: 'Wizeline',
  },
  {
    videoId: '66646',
    title: 'video 3',
    description: 'description 2 description 2',
    imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    searchTerm: 'Infected',
  },
];

function VideoProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const [videos, setVideos] = useState([]);

  const stateRef = useRef();
  stateRef.current = searchTerm;

  const fetchVideos = useCallback(() => {
    const found = videosMock.filter((x) => x.searchTerm === stateRef.current);
    setVideos(found);
  }, []);

  useEffect(() => {
    setSearchTerm('Wizeline');
    const found = videosMock.filter((x) => x.searchTerm === 'Wizeline');
    setVideos(found);
    setCurrentVideo('');
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
