import React, { useState, useEffect } from 'react';
import { HomeSearch, HomeSearchInput, HomeGrid } from './Home.template';
import Card from '../../components/Card';
import { useVideos } from '../../providers/Videos';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useAuth } from '../../providers/Auth';

const Home = () => {
  const { videos, searchParams, handleSearchParams, toggleFavorites } = useVideos();
  const { authenticated } = useAuth();

  const [inputSearch, setInputSearch] = useState('');
  const debouncedSearchTerm = useDebounce(inputSearch, 500);

  useEffect(() => {
    toggleFavorites(false);
    setInputSearch(searchParams.join(' '));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearchParams(inputSearch.trim().split(' '));
    }
  }, [debouncedSearchTerm]);

  const handleInputSearch = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  return (
    <>
      <HomeSearch>
        <HomeSearchInput
          placeholder="Search Here..."
          type="text"
          autoComplete="off"
          value={inputSearch}
          onChange={handleInputSearch}
        />
      </HomeSearch>
      <HomeGrid>
        {Array.isArray(videos) && videos.length > 0
          ? videos.map((video) => {
              return <Card video={video} isAuthed={authenticated} key={video.id} />;
            })
          : null}
      </HomeGrid>
    </>
  );
};

export default Home;
