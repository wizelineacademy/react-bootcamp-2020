import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { StateContext } from '../../utils/State';
import { ListContainer, ListItem, ListItemText, PlayerContainer, PlayerVideoContainer, VideoDescription, VideoTitle } from './Player.styled';
import { useFetch } from '../../utils/hooks/useFetch';
import { StarOutlined, StarTwoTone } from '@ant-design/icons';


const Player = () => {

  const { idVideo } = useParams();
  const { Video: { description, image, publishTime, title, videoId }, Sesion } = useContext(StateContext);
  const { VideoList } = useFetch();
  
  return (
    <PlayerContainer>
      <PlayerVideoContainer>
        <iframe 
          src={`http://www.youtube.com/embed/${idVideo}`} 
          frameborder="0" 
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
              <>
                {
                  <StarOutlined 
                    style={{ cursor: "pointer", fontSize: "30px" }}
                  />
                }
              </>
          }
        </VideoTitle>
        <VideoDescription>
          {description}
        </VideoDescription>
      </PlayerVideoContainer>
      <ListContainer>
        {
          (VideoList) && (
            VideoList.map(({ snippet: {title, thumbnails: { medium: { url } }} }) => 
              <ListItem>
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
