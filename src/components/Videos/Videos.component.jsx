import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import VideoCard from '../VideoCard';
import { useFavorites } from '../../FavoritesContext'


const useStyles = makeStyles((theme) => ({
  videos: {
    flexGrow: 10,
    padding: '1em',
    
  
  },
}));

function Videos(props) {
  const classes = useStyles();
  const { favorites, addFavorite, removeFavorite } = useFavorites()

  const isFavorite = (videoID)=> {

    

    for (let i=0; i < favorites.length; i ++)
    {
      //console.log(favorites[i].id.videoId)
      if (favorites[i].id.videoId === videoID)
      {
        return true
      }
      
    }
    return false
    
  }


  return (

    
    
    <Grid container className={classes.videos} justify="flex-start" spacing={4}>
  
    
      {props.videos.map((video) => {
        return (
            
        
          <VideoCard
            key= {video.id.videoId}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
            id={video.id.videoId}
            video={video}
            isFavorite = {isFavorite(video.id.videoId)}
           

          />
         
        );
      })}
    </Grid>
   
  );
}

export default Videos;

