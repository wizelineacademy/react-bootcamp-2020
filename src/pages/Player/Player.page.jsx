import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { StateContext } from '../../utils/State';
import { ListContainer, ListItem, ListItemText, PlayerContainer, PlayerVideoContainer, VideoDescription, VideoTitle } from './Player.styled';
import { useFetch } from '../../utils/hooks/useFetch';
import { StarOutlined, StarTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';


const Player = () => {

  const history = useHistory();
  const { pathname } = useLocation();
  const { Video: { description, image, publishTime, title, videoId: VideoID }, Sesion, FavoriteVideos, 
  setFavoriteVideos, setVideo, DarkMode, Theme: { TextColor } } = useContext(StateContext);
  const { VideoList } = useFetch();
  const [IsFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    if(!VideoID){
      history.push("/");
    }
  }, [VideoID, history])

  useEffect(() => {
    setIsFavorite(
      FavoriteVideos.find(({ videoId }) => videoId === VideoID)
    );
  }, [FavoriteVideos, VideoID]);

  useEffect(() => {
    if(!Sesion && pathname.includes("/favorites")){
      history.push("/");
    }
  }, [Sesion, history, pathname])

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
    if(!pathname.includes("/favorites")){
      history.push(`/player`);
    } else {
      history.push("/favorites/player");
    }
    
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
          allowFullScreen
        />
        <VideoTitle
          color={TextColor}
        >
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
        (FavoriteVideos && pathname.includes("/favorites")) && (
          FavoriteVideos.map(({ description, image, publishTime, title, videoId }) => 
            <ListItem
              color={DarkMode ? "grey" : "white"}
              colorTxt={TextColor}
              key={videoId}
              onClick={() => selectOtherVideo({
                description,
                image,
                publishTime,
                title,
                videoId
              })}
            >
              <img 
                src={image}
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
      {
        (VideoList && VideoList.length > 0 && !pathname.includes("/favorites") ) && (
          VideoList.map(({ snippet: {title, description, publishTime, thumbnails: { medium: { url } }}, 
            id: { videoId }}) => 
            <ListItem
              color={DarkMode ? "grey" : "white"}
              colorTxt={ TextColor }
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
