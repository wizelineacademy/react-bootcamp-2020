import React, { useEffect } from 'react';
import styles from './Favorites.module.css';
import Card from '../../components/Card';
import { useVideos } from '../../providers/Videos';

const Favorites = () => {
  const { videos, toggleFavorites } = useVideos();

  useEffect(() => {
    toggleFavorites(true);
  }, []);

  return (
    <>
      <header>Favorites</header>
      <div className={styles.card_grid}>
        {Array.isArray(videos) && videos.length > 0 ? (
          videos.map((video) => {
            return <Card video={video} key={video.id} />;
          })
        ) : (
          <div className={styles.no_favorites}>You do not have any favorites yet! :(</div>
        )}
      </div>
    </>
  );
};

export default Favorites;
