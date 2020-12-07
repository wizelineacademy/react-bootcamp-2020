import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useYoutube } from '../../providers/Youtube';
import AppBar from '../../components/AppBar';
import VideoGrid from '../../components/VideoGrid';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function HomePage() {
  const query = useQuery();
  const { videos, searchVideos } = useYoutube();

  useEffect(() => {
    let search = query.get('q');
    if (!search) {
      search = 'a';
    }

    searchVideos(search);
    // eslint-disable-next-line
  }, [videos]);

  return (
    <>
      <AppBar />
      <VideoGrid />
    </>
  );
}
