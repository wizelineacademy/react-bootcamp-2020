import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteVideoCard from '../../components/FavoriteVideoCard'
import { useFavorites} from '../../FavoritesContext'


const useStyles = makeStyles((theme) => ({
  videos: {
    flexGrow: 10,
    padding: '20px 30px 20px 30px',
  },
}));

function FavoriteVideos() {
  const classes = useStyles();
  const {favorites} = useFavorites()


  return (

    <Grid container className={classes.videos} justify="flex-start" spacing={3}>
      {favorites.map((video) => {
        return (

          <FavoriteVideoCard
            key= {video.id.videoId}
            video={video}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
            id={video.id.videoId}
          


          />
         
        );
      })}
    </Grid>
   
  );
}

export default FavoriteVideos;