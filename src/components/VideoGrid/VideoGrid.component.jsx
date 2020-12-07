import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import VideoCard from '../VideoCard';
import DataContext from '../../state/DataContext';

function VideoGrid() {
  const { items } = useContext(DataContext);

  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={2} justify="center" alignItems="stretch">
        {items.map((item) => (
          <Grid item key={item.etag}>
            <VideoCard snippet={item.snippet} id={item.id.videoId} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default VideoGrid;
