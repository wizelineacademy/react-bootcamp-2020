import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useParams } from 'react-router-dom';
import Bar from '../../components/Bar';
import FavoriteWatch from '../../components/FavoriteWatch'


const useStyles = makeStyles((theme) => ({
  VideoWatch: {
    padding: '1em 3em',
  },
}));

const FavoritesWatch = () => {

  const { id } = useParams();
  const classes = useStyles();
 
  //'https://www.youtube.com/embed/cbuZfY2S2UQ'
  //<VideoWatch url={id} />

  return (
    <div>
      <Bar />
      <Grid container className={classes.VideoWatch} justify="center">
        <Grid item xs={12} sm={10} lg={8}>
          <FavoriteWatch url={id} />
        </Grid>
      </Grid>
    </div>
  );
};

export default FavoritesWatch;
