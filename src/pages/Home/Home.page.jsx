import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Bar from '../../components/Bar';
import Videos from '../../components/Videos';
import MyContext, { initialSearch } from '../../MyContext'
import FavoritesProvider from '../../FavoritesContext'
import { searchVideos } from '../../api'




const useStyles = makeStyles((theme) => ({
  VideoWatch: {
    padding: '1em',
    flexGrow: 1,
        align: "center",
    

  },
}));

function HomePage() {
  const classes = useStyles();
  

 
  const [videos, setVideos] = useState([]);
  async function getVideos(search) {
    const videos = await searchVideos(search);
    setVideos(videos);
  }
  useEffect(() => {
    getVideos(initialSearch)
  }, [])

  return (
    <div>
    <MyContext.Provider value = {{videos, getVideos}}>
    <FavoritesProvider>
      <Bar />
        <Grid container className={classes.VideoWatch} justify="center">
          <Grid item xs={12} sm={10} lg={8}>
            <Videos videos={videos}/>        
          </Grid> 
        </Grid>
        </FavoritesProvider>
        </MyContext.Provider>
       
    </div>
  );
}

export default HomePage;
