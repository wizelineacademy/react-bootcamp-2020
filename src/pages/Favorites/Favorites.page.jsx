import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteVideos from '../../components/FavoriteVideos'
import FavoritesContext from '../../FavoritesContext'
import Bar from '../../components/Bar'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  typography: {
    flexGrow: 1,
        align: "center",
    padding: '1em'
      }
}));


function Favorites(props) {

  const classes = useStyles();


  

  
  return (

  <FavoritesContext>
    <div>
      <Bar />
      <Typography className={classes.typography}  variant="h6" noWrap>
            Favorite Videos
        </Typography>
      <FavoriteVideos />
    </div>
  </FavoritesContext>
   

  );
}

export default Favorites;


