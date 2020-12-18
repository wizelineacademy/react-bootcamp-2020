import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { StateContext } from '../../utils/State';
import { VideoContext } from '../../utils/VideoState';
import { ConfigContext } from '../../utils/ConfigState';
import { ListContainer, ListItem, ListItemText, PlayerContainer, 
  PlayerVideoContainer, VideoDescription, VideoTitle } from './Player.styled';
import { useFetch } from '../../utils/hooks/useFetch';
import { StarOutlined, StarTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';


const Player = () => {

  const history = useHistory();
  const { pathname } = useLocation();

  const { state: { Theme: { TextColor }, DarkMode } } = useContext(ConfigContext)
  const { state: { Sesion } } = useContext(StateContext)
  const { state: { CurrentVideo: { description, image, publishTime, title, videoId: VideoID }, FavoriteVideos },
    dispatchV } = useContext(VideoContext);

  const { VideoList } = useFetch();
  const [isFavorite, setIsFavorite] = useState(null);

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
    dispatchV({
      type: "SET_FAVORITE_VIDEOS",
      payload: [ ...FavoriteVideos, {
        description,
        image,
        publishTime,
        title,
        videoId: VideoID
      }]
    });
  };

  const removeFavoriteVideo = () => {
    dispatchV({
      type: "SET_FAVORITE_VIDEOS",
      payload: FavoriteVideos.filter(({ videoId }) => videoId !== VideoID )
    });
  };

  const selectOtherVideo = (video) => {
    dispatchV({
      type: "SET_CURRENT_VIDEO",
      payload: video
    });
    if(!pathname.includes("/favorites")){
      history.push(`/player/${video.videoId}`);
    } else {
      history.push(`/favorites/player/${video.videoId}`);
    }
    
  };
  

  return (
    <PlayerContainer>
      <PlayerVideoContainer>
        <iframe 
          data-testid="Iframe"
          src={`https://www.youtube.com/embed/${VideoID}`} 
          frameBorder="0" 
          title="Video" 
          width="100%" 
          height="550"
          allowFullScreen
        />
        <VideoTitle
          data-testid="VideoTitle"
          color={TextColor}
        >
          <div>
            {title}
          </div>
          {
            (Sesion) && 
              <Tooltip 
                title={isFavorite ? "Remove from favorites" : "Add to favorites"} 
                data-testid="Tooltip"
              >
                {
                  (isFavorite) ? (
                    <StarTwoTone 
                      style={{ cursor: "pointer", fontSize: "30px" }}
                      twoToneColor="#ffd700"
                      onClick={removeFavoriteVideo}
                      data-testid="StarTwo"
                    />
                  ) : (
                    <StarOutlined 
                      style={{ cursor: "pointer", fontSize: "30px" }}
                      onClick={addFavoriteVideo}
                      data-testid="StartOut"
                    />
                  )
                }
              </Tooltip>
          }
        </VideoTitle>
      <VideoDescription
        data-testid="VideoDesc"
      >
        {description}
      </VideoDescription>
    </PlayerVideoContainer>
    <ListContainer>
      {
        (FavoriteVideos && pathname.includes("/favorites")) && (
          FavoriteVideos.map(({ description, image, publishTime, title, videoId }) => 
            <ListItem
              data-testid="ListFavItem"
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
              <ListItemText
                data-testid="ListFavItemTitle"
              >
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
              data-testid="ListVidItem"
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
              <ListItemText
                data-testid="ListVidItemTitle"
              >
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
