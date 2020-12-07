import React, { useContext } from 'react';
import VideoGrid from '../../components/VideoGrid';
import useStyles from './FavoritesStyles';
import FavoritesContext from '../../state/FavoritesContext';

function Favorites() {
  const { state } = useContext(FavoritesContext);
  const { favorites } = state;
  const classes = useStyles();
  const isFav = true;

  return (
    <main className={classes.content}>
      <VideoGrid items={favorites} isFav={isFav} />
    </main>
  );
}

export default Favorites;
