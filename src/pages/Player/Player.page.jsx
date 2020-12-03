import React, { useContext, useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';
import Rowlist from '../../components/Rowlist/RowList.component';
import { VideoContext } from '../../providers/Video';
import { addToFavorites, removeFromFavorites } from '../../utils/favorites';

const PlayerPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const PlayerContainer = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 3px;
`;

const RowlistContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 3px;
`;

const TextDescription = styled.p`
  color: ${(props) => props.theme.textcolor};
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content:center;
  align-items:center:
`;

const TextDescriptionsContainer = styled.div`
  width: 80%;
`;

const FadeOut = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
  }

  to {
    transform: translateY(-250px);
    opacity: 0;
  }
`;

const Emoji = styled.h1`
  position: relative;
  bottom: 0;
  font-size: 125px;
  transform-origin: center;
  animation: ${FadeOut} 1.5s ease infinite;
`;

const FavoritesButton = styled.button`
  margin-top: 10px;
`;

function PlayerPage(props) {
  const { setCurrentVideo, videos, currentVideo } = useContext(VideoContext);
  useEffect(() => {
    if (videos !== undefined) {
      const videoId = props.id.params.id;
      const video = videos.find((actualVideo) => actualVideo.videoId === videoId);
      if (video !== undefined) setCurrentVideo(video);
    }
  }, [videos, setCurrentVideo, props.id.params.id]);

  const [hide, setHide] = useState(true);
  const addToFavoritesHandleClick = () => {
    setHide(false);
    setTimeout(() => setHide(true), 1000);
    addToFavorites(currentVideo);
  };

  const removeFromFavoritesHandleClick = () => {
    setHide(false);
    setTimeout(() => setHide(true), 1000);
    removeFromFavorites(currentVideo);
  };

  const url = `https://www.youtube.com/embed/${props.id.params.id}`;
  return (
    <PlayerPageContainer>
      <PlayerContainer>
        <iframe
          title={props.id.params.id}
          width="1240"
          height="496"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <ActionsContainer>
          <TextDescriptionsContainer>
            <TextDescription>{currentVideo.title}</TextDescription>
            <TextDescription>{currentVideo.description}</TextDescription>
          </TextDescriptionsContainer>
          <div>
            <Emoji hidden={hide} offset={200}>
              <span role="img" aria-label="like emoji">
                🖤
              </span>
            </Emoji>
            <FavoritesButton hidden={!hide} onClick={addToFavoritesHandleClick}>
              Add to favorites 👍🏼
            </FavoritesButton>
            <FavoritesButton hidden={!hide} onClick={removeFromFavoritesHandleClick}>
              Remove from favorites
            </FavoritesButton>
          </div>
        </ActionsContainer>
      </PlayerContainer>
      <RowlistContainer>
        <Rowlist />
      </RowlistContainer>
    </PlayerPageContainer>
  );
}

export default PlayerPage;
