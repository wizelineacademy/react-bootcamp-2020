import React from 'react';
import { Grid } from '@material-ui/core';
import VideoCard from '../VideoCard';

function VideoGrid(props) {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={2} justify="center" alignItems="stretch">
        {props.items.map((item) => (
          <Grid item key={item.etag}>
            <VideoCard snippet={item.snippet} id={item.id.videoId} isFav={props.isFav} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default VideoGrid;
