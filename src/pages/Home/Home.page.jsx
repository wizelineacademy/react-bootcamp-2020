import React, { useContext } from 'react';
import VideoGrid from '../../components/VideoGrid';
import useStyles from './HomeStyles';
import DataContext from '../../state/DataContext';

function Home() {
  const { items } = useContext(DataContext);
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <VideoGrid items={items} />
    </main>
  );
}

export default Home;
