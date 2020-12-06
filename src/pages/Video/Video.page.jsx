import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import YouTube from 'react-youtube';
import Grid from '@material-ui/core/Grid';
import LeftDrawer from '../../components/LeftDrawer';
import MainAppBar from '../../components/MainAppBar';
import useStyles from './VideoStyles';
import { items } from '../../mock/mockedData';

function Main() {
  const classes = useStyles();
  const currentVideo = items[20];
  const opts = {
    height: '390',
    width: '640',
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainAppBar />
      <LeftDrawer />
      <main className={classes.content}>
        <div style={{ marginTop: 50 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={9}>
              <YouTube videoId={currentVideo.id.videoId} opts={opts} />
            </Grid>
            <Grid item xs={12} sm={3}>
              <h1>Hola</h1>
              <h1>Hola</h1>
              <h1>Hola</h1>
              <h1>Hola</h1>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
}

export default Main;
