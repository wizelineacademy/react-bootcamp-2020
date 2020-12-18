import React, { useContext, useEffect } from 'react';
import { StateContext } from '../../utils/State';
import { VideoContext } from '../../utils/VideoState';
import VideoItem from '../../components/VideoItem';
import { FavoritesContainer } from './Favorites.styled';
import { useHistory } from 'react-router';
import { Result } from 'antd';

const FavoritesPage = () => {

  const history = useHistory();

  const { state: { Sesion } } = useContext(StateContext);
  const { state: { FavoriteVideos }} = useContext(VideoContext);

  useEffect(() => {
    if(!Sesion){
      history.push("/");
    }
  }, [Sesion, history])

  return (
    <FavoritesContainer>
      {
        (FavoriteVideos && FavoriteVideos.length > 0) ? (
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
              viewVideo={(idVideo) => history.push(`/favorites/player/${idVideo}`) }
            />
          )
        ) : (
          <Result style={{
              width: "inherit",
            }}
            title={
              <div style={{
                  color: "red"
                }}
              >
                You don't have favorites videos bro :(
              </div>
            }
          />
        ) 
      }
    </FavoritesContainer>
  );
}

export default FavoritesPage;