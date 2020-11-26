/* eslint-disable */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import VideoCard from '../../components/VideoCard/VideoCard';
import VideosContext from '../../state/VideosContext';

import './HomePage.styles.css';

function HomePage() {
  const { videos } = useContext(VideosContext);

  return (
    <Grid>
      <Grid.Row fluid columns={3}>
        {videos.map((video, id) => (
          // eslint-disable-line
          <Link to="/videoplayer">
            <VideoCard video={video} key={id} />
          </Link>
        ))}
      </Grid.Row>
    </Grid>
  );
}

export default HomePage;
