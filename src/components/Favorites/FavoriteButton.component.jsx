import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { useAuth } from '../../providers/Auth';
import { storage } from '../../utils/storage';

// @todo fix label not rerendering when parent component changes
export default function FavoriteButton(props) {
  const { authenticated } = useAuth();

  const favorites = storage.get('favorites') || [];
  const [isFavorite, setIsFavorite] = useState(favorites.includes(props.id));

  function handleClick() {
    if (isFavorite) {
      setIsFavorite(false);

      const index = favorites.indexOf(props.id);
      favorites.splice(index, 1);
      storage.set('favorites', favorites);
    } else {
      setIsFavorite(true);

      favorites.push(props.id);
      storage.set('favorites', favorites);
    }
  }

  return (
    <>
      {authenticated ? (
        <Button type="button" onClick={handleClick}>
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </Button>
      ) : (
        <Link to="/login">Login to manage favorites</Link>
      )}
    </>
  );
}
