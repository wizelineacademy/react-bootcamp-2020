/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, H1 } from './FavoritesPage.styles';

import VideoCardHome from '../../components/VideoCardHome/VideoCardHome';
import { FAVORITES_LIST } from '../../utils/constants';
import { storage } from '../../utils/storage';

const FavoritesPage = () => {
  const favoritesList = storage.get(FAVORITES_LIST);

  return (
    <Container>
      <H1>My Favorites</H1>
      <Grid>
        {favoritesList.map((video, id) => (
          <Link to="/player">
            <VideoCardHome video={video} key={id} />
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default FavoritesPage;
