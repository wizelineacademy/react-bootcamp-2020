/* eslint-disable */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import VideoCardHome from '../../components/VideoCardHome/VideoCardHome';
import VideosContext from '../../context/VideosContext';

import './HomePage.styles.css';

function HomePage() {
  const { videos } = useContext(VideosContext);

  return (
    <Grid>
      <Grid.Row columns={3}>
        {videos.map((video, id) => (
          <Grid.Column>
            <Link to="/player">
              <VideoCardHome video={video} key={id} />
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}

export default HomePage;
