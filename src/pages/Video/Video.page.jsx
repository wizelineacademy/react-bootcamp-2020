import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainAppBar from '../../components/MainAppBar';
import useStyles from './VideoStyles';
import LeftDrawer from '../../components/LeftDrawer';
import VideoWatch from '../../components/VideoWatch';
import { items } from '../../mock/mockedData';

function Video() {
  const classes = useStyles();
  const currentVideo = items[0];
  const filteredItems = items.filter((item) => item.etag !== currentVideo.etag);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainAppBar />
      <LeftDrawer />
      <VideoWatch currentVideo={currentVideo} items={filteredItems} />
    </div>
  );
}

export default Video;
