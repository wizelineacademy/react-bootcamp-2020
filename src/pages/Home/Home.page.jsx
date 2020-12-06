import React from 'react';
import Grid from '@material-ui/core/Grid';

import CardWrapper from '../../components/CardWrapper/CardWrapper';
import { useStyles } from './HomePage.styled';
import { useVideo } from '../../providers/Video/Video.provider';

function HomePage() {
  const { videos } = useVideo();
  const classes = useStyles();

  const setPath = (video) => `/${video.id}`;

  return (
    <Grid container className={classes.root} spacing={3}>
      {videos.length === 0 ? (
        <div>No results found</div>
      ) : (
        <Grid>
          <CardWrapper videos={videos} setPath={setPath} />
        </Grid>
      )}
    </Grid>
  );
}

export default HomePage;
