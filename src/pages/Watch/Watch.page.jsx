import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import AppBar from '../../components/AppBar';
import VideoDisplay from '../../components/VideoDisplay';
import videos from '../../mock';
import '../../global.css';

export default function WatchVideoPage() {
  const { id } = useParams();
  const video = videos.filter((v) => v.id === id).pop();

  if (video === undefined) {
    return <h1>Not Found!</h1>;
  }

  return (
    <>
      <AppBar />
      <Grid container className="content">
        <Grid item xs={12} sm={8} md={10}>
          <VideoDisplay video={video} />
        </Grid>
        <Grid item sm>
          &nbsp;
        </Grid>
      </Grid>
    </>
  );
}
