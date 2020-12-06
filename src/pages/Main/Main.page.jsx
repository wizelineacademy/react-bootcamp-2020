import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LeftDrawer from '../../components/LeftDrawer';
import VideoGrid from '../../components/VideoGrid';
import MainAppBar from '../../components/MainAppBar';
import useStyles from './MainStyles';

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainAppBar />
      <LeftDrawer />
      <main className={classes.content}>
        <VideoGrid />
      </main>
    </div>
  );
}

export default Main;
