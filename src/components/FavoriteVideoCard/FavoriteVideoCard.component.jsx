import React , {useContext}from 'react';
import { Grid, Paper, Divider, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFavorites } from '../../FavoritesContext'
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '1em',
    maxWidth: '250px',
    minWidth: '250px',
    height: 230,
    backgroundColor: '#cfd8dc',
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

function FavoriteVideoCard(props) {
  const classes = useStyles();
    const { addFavorite, removeFavorite } = useFavorites()


  return (
    <Grid item>
      <Paper className={classes.paper}>
        <img
          style={{ justifyContent: 'center', display: 'flex' }}
          src={props.video.snippet.thumbnails.medium.url}
          alt={props.video.snippet.title}
          className={classes.thumbnail}
        />
        <Divider />
        <div className={classes.paperTitle}>
        <Typography variant="h6" noWrap className="title">
        {props.video.snippet.title}
        </Typography>
        <Button size="small" variant="contained" color="secondary" className={classes.button}
        startIcon={<DeleteIcon />} onClick={()=> removeFavorite(props.video)}>
        Delete
      </Button>
        
        </div>
      </Paper>
    </Grid>
  );
}

export default FavoriteVideoCard;
