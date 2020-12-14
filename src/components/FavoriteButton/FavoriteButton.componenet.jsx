import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useAuth } from '../../providers/Auth';

export default function FavoriteButton({ videoId }) {
  const { user, addFavorite, delFavorite } = useAuth();
  const [favorite, setFavorite] = useState(false);

  const editFavorite = () => {
    if (favorite) {
      delFavorite(videoId);
    } else {
      addFavorite(videoId);
    }
    setFavorite(!favorite);
  };

  useEffect(() => {
    if (user && user.favorites.includes(videoId)) {
      setFavorite(true);
    }
    // eslint-disable-next-line
  }, []);

  if (!user) {
    return <div />;
  }

  return (
    <IconButton aria-label="favorite" onClick={editFavorite}>
      {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
