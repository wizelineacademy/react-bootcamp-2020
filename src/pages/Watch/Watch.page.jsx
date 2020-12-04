import React from 'react';
import { Grid } from '@material-ui/core';
import AppBar from '../../components/AppBar';
import VideoDisplay from '../../components/VideoDisplay';
import { videos } from '../../mock';
import '../../global.css';

export default function WatchVideoPage() {
  return (
    <>
      <AppBar />
      <Grid container className="content">
        <Grid item style={{ backgroundColor: 'tomato' }} xs={12} sm={8} md={10}>
          <VideoDisplay video={videos[1]} />
        </Grid>
        <Grid item style={{ backgroundColor: '#cfe8fc' }} sm>
          &nbsp;
        </Grid>
      </Grid>
    </>
  );
}
