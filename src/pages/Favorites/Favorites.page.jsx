import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../utils/State';
import VideoItem from '../../components/VideoItem';
import { FavoritesContainer } from './Favorites.styled';
import { useHistory } from 'react-router';

const FavoritesPage = () => {

  const history = useHistory();
  const { FavoriteVideos, Sesion } = useContext(StateContext);

  useEffect(() => {
    if(!Sesion){
      history.push("/");
    }
  }, [Sesion, history])

  return (
    <FavoritesContainer>
      {
        (FavoriteVideos && FavoriteVideos.length > 0) && (
          FavoriteVideos.map(({ videoId, title, description, publishTime, image }) => 
            <VideoItem 
              key={videoId}
              videoInfo={{
                title, 
                description, 
                publishTime,
                thumbnails: { medium: { url: image } }
              }} 
              videoID={{
                videoId
              }} 
              viewVideo={() => history.push(`/favorites/player`) }
            />
          )
        ) 
      }
    </FavoritesContainer>
  );
}

export default FavoritesPage;