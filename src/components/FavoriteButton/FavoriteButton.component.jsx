import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import GlobalContext from '../../state/GlobalContext';

function FavoriteButton() {
  const { user, activeVideo, favorites, setFavorites } = useContext(GlobalContext);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')));
  }, [setFavorites]);

  const favoritesList = favorites;

  const handleOnFavorite = () => {
    if (favoritesList === null) {
      setFavorites([activeVideo]);
    } else if (favoritesList.some((video) => video.videoId === activeVideo.videoId)) {
      setFavorites(favorites.filter((video) => video.videoId !== activeVideo.videoId));
    } else {
      setFavorites([...favorites, activeVideo]);
    }
  };

  if (user === null) {
    return null;
  }
  if (
    favoritesList &&
    favoritesList.some((video) => video.videoId === activeVideo.videoId)
  ) {
    return (
      <Button variant="info" onClick={() => handleOnFavorite()}>
        Remove from favorites
      </Button>
    );
  }
  return (
    <Button variant="info" onClick={() => handleOnFavorite()}>
      Add to favorites
    </Button>
  );
}

export default FavoriteButton;
