/* eslint-disable */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import VideoCardHome from '../../components/VideoCardHome/VideoCardHome';
import VideosContext from '../../context/VideosContext';

function HomePage() {
  const { videos } = useContext(VideosContext);

  return (
    <Grid stackable>
      <Grid.Row columns={3}>
        {videos.map((video, id) => (
          <Grid.Column>
            <VideoCardHome video={video} key={id} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}

export default HomePage;
