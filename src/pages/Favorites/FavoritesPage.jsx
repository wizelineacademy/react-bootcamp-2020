/* eslint-disable */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import VideoCard from '../../components/VideoCard/VideoCard';

const FavoritesPage = () => {
  const favoritesList = JSON.parse(localStorage.getItem('favoritesList'));

  return (
    <Grid>
      <h1>My Favorites</h1>
      <Grid.Row fluid columns={3}>
        {favoritesList.map((video, id) => (
          <Link to="/videoplayer">
            <VideoCard video={video} key={id} />
          </Link>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default FavoritesPage;
