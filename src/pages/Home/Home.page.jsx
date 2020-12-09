import React, { useEffect } from 'react';
import { INITIAL_QUERY } from '../../constants';
import { useLocation } from 'react-router-dom';
import { useSearch } from '../../providers/Search';
import { useYoutube } from '../../providers/Youtube';
import AppBar from '../../components/AppBar';
import VideoGrid from '../../components/VideoGrid';

function useParams() {
  return new URLSearchParams(useLocation().search);
}

export default function HomePage() {
  const params = useParams();
  const { searchVideos } = useYoutube();
  const { query } = useSearch();

  useEffect(() => {
    let search = params.get('q');
    if (!search) {
      search = INITIAL_QUERY;
    }

    searchVideos(search);
    // eslint-disable-next-line
  }, [query]);

  return (
    <>
      <AppBar />
      <VideoGrid />
    </>
  );
}
