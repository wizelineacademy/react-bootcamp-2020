import React, { useEffect, useState } from 'react';
import { searchVideos, searchVideosByIds } from '../../api';
import { useSearch } from '../../providers/Search';
import AppBar from '../../components/AppBar';
import VideoGrid from '../../components/VideoGrid';
import { useFavorite } from '../../providers/Favorite';
import { useAuth } from '../../providers/Auth';

export default function HomePage() {
  const { query } = useSearch();
  const { favorite } = useFavorite();
  const { user } = useAuth();
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    let results = [];

    if (user !== null && favorite) {
      results = await searchVideosByIds(user.favorites);
    } else {
      results = await searchVideos(query);
    }

    setVideos(results);
  };

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line
  }, [query, favorite, user]);

  return (
    <>
      <AppBar />
      <VideoGrid videos={videos} />
    </>
  );
}
