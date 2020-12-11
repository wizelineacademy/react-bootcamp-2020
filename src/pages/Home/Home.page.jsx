import React, { useEffect, useState } from 'react';
import { searchVideos } from '../../api';
import { useSearch } from '../../providers/Search';
import AppBar from '../../components/AppBar';
import VideoGrid from '../../components/VideoGrid';

export default function HomePage() {
  const { query } = useSearch();
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const results = await searchVideos(query);
    setVideos(results);
  };

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line
  }, [query]);

  return (
    <>
      <AppBar />
      <VideoGrid videos={videos} />
    </>
  );
}
