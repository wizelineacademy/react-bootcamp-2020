import React from 'react';
import VideoGrid from '../../components/VideoGrid';
import useStyles from './HomeStyles';

function Home() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <VideoGrid />
    </main>
  );
}

export default Home;
