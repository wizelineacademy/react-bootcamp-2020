/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import VideoCardHome from '../../components/VideoCardHome/VideoCardHome';

const FavoritesPage = () => {
  const favoritesList = JSON.parse(localStorage.getItem('favoritesList'));

  return (
    <Grid>
      <h1>My Favorites</h1>
      <Grid.Row columns={3}>
        {favoritesList.map((video, id) => (
          <Grid.Column>
            <Link to="/player">
              <VideoCardHome video={video} key={id} />
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default FavoritesPage;
