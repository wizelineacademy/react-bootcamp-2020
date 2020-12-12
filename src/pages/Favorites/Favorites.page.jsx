import React, { useEffect } from 'react';
import { Header, FavoritesGrid, EmptyFavorites } from './Favorites.template';
import Card from '../../components/Card';
import { useVideos } from '../../providers/Videos';

const Favorites = () => {
  const { videos, toggleFavorites } = useVideos();

  useEffect(() => {
    toggleFavorites(true);
  }, []);

  return (
    <>
      <Header>Favorites</Header>
      <FavoritesGrid>
        {Array.isArray(videos) && videos.length > 0 ? (
          videos.map((video) => {
            return <Card video={video} isAuthed key={video.id} />;
          })
        ) : (
          <EmptyFavorites>You do not have any favorites yet! :(</EmptyFavorites>
        )}
      </FavoritesGrid>
    </>
  );
};

export default Favorites;
