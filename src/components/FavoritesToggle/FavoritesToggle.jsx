import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';
import { useFavorite } from '../../providers/Favorite';

export default function FavoritesToggle() {
  const { user } = useAuth();
  const { favorite, setFavorite } = useFavorite();

  if (!user) {
    return <div />;
  }

  return (
    <FormControlLabel
      control={<Switch checked={favorite} onChange={() => setFavorite(!favorite)} />}
      label="Favorites"
    />
  );
}
