import React from 'react';
import { Grid, Paper, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFavorites } from '../../FavoritesContext'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import { useHistory } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';

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

function VideoCard(props) {
  const classes = useStyles();
  const history =useHistory()
  const { addFavorite, removeFavorite } = useFavorites()

  const goToWatch = () => {
      history.push(`/watch/${props.id}`)
  }


  return (
    <Grid item>
      <Paper className={classes.paper}>
        <img
          style={{ justifyContent: 'center', display: 'flex' }}
          src={props.thumbnail}
          alt={props.title}
          className={classes.thumbnail}
        />
        <Divider />
        <div className={classes.paperTitle}>
          <a href={`/watch/${props.id}`} target="_self" rel="noopener noreferrer">
            {props.title}
          </a>
          <br></br>
          
        <Button onClick ={goToWatch} className={classes.button}  size="small"  variant="contained" color="primary">
            Watch
        </Button>
        <Button onClick = {()=> addFavorite(props.video)} className={classes.button} size="small" variant="contained" color="primary">
            Favorite
        </Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default VideoCard;
