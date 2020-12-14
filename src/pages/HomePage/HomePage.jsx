/* eslint-disable */
import React, { useContext } from 'react';
import { Grid } from './HomePage.styles';

import VideoCardHome from '../../components/VideoCardHome/VideoCardHome';
import VideosContext from '../../context/VideosContext';

function HomePage() {
  const { videos } = useContext(VideosContext);

  return (
    <Grid>
      {videos.map((video, id) => (
        <VideoCardHome video={video} key={id} />
      ))}
    </Grid>
  );
}

export default HomePage;
