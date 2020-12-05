import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { StateContext } from '../../utils/State';
import { ListContainer, ListItem, ListItemText, PlayerContainer, PlayerVideoContainer, VideoDescription, VideoTitle } from './Player.styled';
import { useFetch } from '../../utils/hooks/useFetch';
import { StarOutlined, StarTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';


const Player = () => {

  const history = useHistory();
  const { Video: { description, image, publishTime, title, videoId: VideoID }, 
    Sesion, FavoriteVideos, setFavoriteVideos, setVideo } = useContext(StateContext);
  const { VideoList } = useFetch();
  const [IsFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    setIsFavorite(
      FavoriteVideos.find(({ videoId }) => videoId === VideoID)
    );
  }, [FavoriteVideos, VideoID]);

  const addFavoriteVideo = () => {
    setFavoriteVideos([ ...FavoriteVideos, {
      description,
      image,
      publishTime,
      title,
      videoId: VideoID
    }]);
  };

  const removeFavoriteVideo = () => {
    setFavoriteVideos(
      FavoriteVideos.filter(({ videoId }) => videoId !== VideoID )
    );
  };

  const selectOtherVideo = (video) => {
    setVideo(video);
    history.push(`/player`)
  };
  

  return (
    <PlayerContainer>
      <PlayerVideoContainer>
        <iframe 
          src={`http://www.youtube.com/embed/${VideoID}`} 
          frameBorder="0" 
          title="Video" 
          width="100%" 
          height="550" 
        />
        <VideoTitle>
          <div>
            {title}
          </div>
          {
            (Sesion) && 
              <Tooltip 
                title={IsFavorite ? "Remove from favorites" : "Add to favorites"} 
              >
                {
                  (IsFavorite) ? (
                    <StarTwoTone 
                      style={{ cursor: "pointer", fontSize: "30px" }}
                      twoToneColor="#ffd700"
                      onClick={removeFavoriteVideo}
                    />
                  ) : (
                    <StarOutlined 
                      style={{ cursor: "pointer", fontSize: "30px" }}
                      onClick={addFavoriteVideo}
                    />
                  )
                }
              </Tooltip>
          }
        </VideoTitle>
        <VideoDescription>
          {description}
        </VideoDescription>
      </PlayerVideoContainer>
      <ListContainer>
        {
          (VideoList) && (
            VideoList.map(({ snippet: {title, description, publishTime, thumbnails: { medium: { url } }}, 
              id: { videoId }}) => 
              <ListItem
                key={videoId}
                onClick={() => selectOtherVideo({
                  description,
                  image: url,
                  publishTime,
                  title,
                  videoId
                })}
              >
                <img 
                  src={url}
                  alt={title}
                  width="120"
                  height="100"
                />
                <ListItemText>
                  {title}
                </ListItemText>
              </ListItem>
            )
          )
        }
      </ListContainer> 
    </PlayerContainer>
  );
}

export default Player;
