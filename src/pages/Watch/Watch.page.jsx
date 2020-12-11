import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import AppBar from '../../components/AppBar';
import VideoDisplay from '../../components/VideoDisplay';
import '../../global.css';

export default function WatchVideoPage() {
  const { id } = useParams();

  return (
    <>
      <AppBar />
      <Grid container className="content">
        <Grid item xs={12} sm={8} md={10}>
          <VideoDisplay videoId={id} />
        </Grid>
        <Grid item sm>
          &nbsp;
        </Grid>
      </Grid>
    </>
  );
}
