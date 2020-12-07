import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Bar from '../../components/Bar';
import VideoWatch from '../../components/VideoWatch';
import { videos } from '../../mock';

const useStyles = makeStyles((theme) => ({
  VideoWatch: {
    padding: '1em 3em',
  },
}));

const WatchPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const video = videos.filter((v) => v.id === id).pop();

  return (
    <div>
      <Bar />
      <Grid container className={classes.VideoWatch} justify="center">
        <Grid item xs={12} sm={10} lg={8}>
          <VideoWatch url={video.url} />
        </Grid>
      </Grid>
    </div>
  );
};

export default WatchPage;
