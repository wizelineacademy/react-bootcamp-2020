import React from 'react';
import { Grid } from '@material-ui/core';
import VideoCard from '../VideoCard';
import { items } from '../../mock/mockedData';

function VideoGrid() {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={2} justify="center" alignItems="stretch">
        {items.map((item) => (
          <Grid item key={item.etag}>
            <VideoCard snippet={item.snippet} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default VideoGrid;
