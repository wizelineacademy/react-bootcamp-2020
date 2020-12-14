import React from 'react';
import { Grid, Paper, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFavorites } from '../../FavoritesContext'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1em',
    maxWidth: '250px',
    minWidth: '250px',
    height: 230,
    backgroundColor: '#cfd8dc',
  },

  paperFavorite: {
    padding: '1em',
    maxWidth: '250px',
    minWidth: '250px',
    height: 230,
    backgroundColor: '#F0B27A',
  },

  paperTitle: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  thumbnail: {
    width: '250px',
  },

  button: {
    margin: theme.spacing(1),
    
  },
}));

function VideoCard(props) {
  const classes = useStyles();
  const history =useHistory()
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  let isFavorite = props.isFavorite

  const goToWatch = () => {
      history.push(`/watch/${props.id}`)
  }

  let favorite_Button;

  if (isFavorite) {
    favorite_Button = <Button onClick = {()=> addFavorite(props.video)} className={classes.button} size="small" variant="contained" color="primary">Remove</Button>;
  } else {
    favorite_Button = <Button onClick = {()=> addFavorite(props.video)} className={classes.button} size="small" variant="contained" color="primary">Favorite</Button>;
  }


  return (
    <Grid item>
      <Paper className={isFavorite ? classes.paperFavorite : classes.paper}>
        <img
          style={{ justifyContent: 'center', display: 'flex' }}
          src={props.thumbnail}
          alt={props.title}
          className={classes.thumbnail}
        />
        <Divider />
        <div className={classes.paperTitle}>
        
          <Link href={`/watch/${props.id}`} target="_self" rel="noopener noreferrer">
            {props.title}
          </Link>
          <br></br>
          
        <Button onClick ={goToWatch} className={classes.button}  size="small"  variant="contained" color="primary">
            Watch
        </Button>
        
        
        {favorite_Button}
        
        
        </div>
      </Paper>
    </Grid>
  );
}

export default VideoCard;
