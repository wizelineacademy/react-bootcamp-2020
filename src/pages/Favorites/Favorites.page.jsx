import React, { useContext } from 'react';
import VideoGrid from '../../components/VideoGrid';
import useStyles from './FavoritesStyles';
import DataContext from '../../state/DataContext';

function Favorites() {
  const { favItems } = useContext(DataContext);
  const classes = useStyles();
  const isFav = true;

  return (
    <main className={classes.content}>
      <VideoGrid items={favItems} isFav={isFav} />
    </main>
  );
}

export default Favorites;
