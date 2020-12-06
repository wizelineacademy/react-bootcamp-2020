import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CardWrapper from '../../components/CardWrapper/CardWrapper';
import { useStyles } from './FavoritesPage.styled';
import { useUserPreferences } from '../../providers/Preferences/UserPreferences.provider';

const setPath = (video) => `/favorites/${video.id}`;

function FavoritesPage() {
  const classes = useStyles();
  const { favorites } = useUserPreferences();

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Favorite Videos
        </Typography>
      </Grid>
      <Grid spacing={2}>
        <CardWrapper videos={favorites} setPath={setPath} />
      </Grid>
    </Grid>
  );
}

export default FavoritesPage;
