import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardWrapper from '../../components/CardWrapper/CardWrapper';
import { useStyles } from './HomePage.styled';
import { useVideo } from '../../providers/Video/Video.provider';
import './Home.styles.css';

function HomePage() {
  const { videos } = useVideo();
  const classes = useStyles();

  const setPath = (video) => `/${video.id}`;

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <h1>Hello stranger</h1>
      </Grid>
      {videos.length === 0 ? (
        <div>No results found</div>
      ) : (
        <Grid spacing={2}>
          <CardWrapper videos={videos} setPath={setPath} />
        </Grid>
      )}
    </Grid>
  );
}

export default HomePage;
