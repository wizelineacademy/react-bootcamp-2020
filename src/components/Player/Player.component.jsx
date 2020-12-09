import React, { useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { VideoContext } from '../../providers/Video/Video.provider';
import { FavoritesContext } from '../../providers/Favorites/Favorites.provider';

const PlayerContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 3px;
  max-width: 1200px;
  min-width: 1200px;
`;

const TextDescription = styled.p`
  color: ${(props) => props.theme.textcolor};
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content:initial;
  align-items:center:
`;

const TextDescriptionsContainer = styled.div`
  width: 70%;
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

const ButtonsContainer = styled.div`
  margin-left: 30px;
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
  background: ${(props) => props.theme.primary};
  color: white;
  padding: 10px;
  border-radius: 8px;
`;

function Player(props) {
  const { setCurrentVideo, videos, currentVideo } = useContext(VideoContext);
  const {
    removeFromFavoritesProvider,
    addToFavoritesProvider,
    isFavoriteVideoProvider,
  } = useContext(FavoritesContext);
  const { authenticated } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  useEffect(() => {
    if (videos !== undefined) {
      const videoId = props.id;
      const video = videos.find((actualVideo) => actualVideo.videoId === videoId);
      if (video !== undefined) {
        setCurrentVideo(video);
        setIsFavorite(isFavoriteVideoProvider(video));
      }
    }
  }, [videos, setCurrentVideo, props.id, isFavoriteVideoProvider]);

  const addToFavoritesHandleClick = () => {
    setShowEmoji(true);
    setTimeout(() => setShowEmoji(false), 1000);
    addToFavoritesProvider(currentVideo);
    setIsFavorite(true);
  };

  const removeFromFavoritesHandleClick = () => {
    setShowEmoji(true);
    setTimeout(() => setShowEmoji(false), 1000);
    removeFromFavoritesProvider(currentVideo);
    setIsFavorite(false);
  };

  const url = `https://www.youtube.com/embed/${props.id}`;
  return (
    <PlayerContainer>
      <iframe
        title={props.id}
        width="100%"
        height="500"
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
        <ButtonsContainer hidden={!authenticated}>
          <Emoji hidden={!showEmoji} offset={200}>
            <span role="img" aria-label="like emoji">
              🖤
            </span>
          </Emoji>
          <FavoritesButton hidden={isFavorite} onClick={addToFavoritesHandleClick}>
            Add to favorites 👍🏼
          </FavoritesButton>
          <FavoritesButton hidden={!isFavorite} onClick={removeFromFavoritesHandleClick}>
            Remove from favorites
          </FavoritesButton>
        </ButtonsContainer>
      </ActionsContainer>
    </PlayerContainer>
  );
}

export default Player;
