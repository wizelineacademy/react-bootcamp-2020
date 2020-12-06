import React from 'react';
import Grid from '@material-ui/core/Grid';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';

function VideoWatch(props) {
  return (
    <Grid style={{ marginTop: 60 }} container spacing={2}>
      <Grid item xs={12} sm={7}>
        <VideoPlayer video={props.currentVideo} />
      </Grid>
      <Grid item xs={12} sm={5}>
        <VideoList items={props.items} currentVideo={props.currentVideo} />
      </Grid>
    </Grid>
  );
}

export default VideoWatch;
