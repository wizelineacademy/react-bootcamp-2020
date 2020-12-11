import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Card from '../../components/Card';
import { useVideos } from '../../providers/Videos';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useAuth } from '../../providers/Auth';

const Home = () => {
  const { videos, searchParams, handleSearchParams, toggleFavorites } = useVideos();
  const { authenticated } = useAuth();

  const [inputSearch, setInputSearch] = useState('');
  const debouncedSearchTerm = useDebounce(inputSearch, 500);

  // Take search params and set it as the input search value
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
      <div className={styles.home_search_container}>
        <input
          placeholder="Search Here..."
          type="text"
          className={styles.home_search_bar}
          autoComplete="off"
          value={inputSearch}
          onChange={handleInputSearch}
        />
      </div>
      <div className={styles.card_grid}>
        {Array.isArray(videos) && videos.length > 0
          ? videos.map((video) => {
              return <Card video={video} isAuthed={authenticated} key={video.id} />;
            })
          : null}
      </div>
    </>
  );
};

export default Home;
