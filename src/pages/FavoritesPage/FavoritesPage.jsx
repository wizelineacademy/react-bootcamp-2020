/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import VideoCardHome from '../../components/VideoCardHome/VideoCardHome';
import { FAVORITES_LIST } from '../../utils/constants';
import { storage } from '../../utils/storage';

const FavoritesPage = () => {
  const favoritesList = storage.get(FAVORITES_LIST);

  return (
    <Grid stackable>
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
