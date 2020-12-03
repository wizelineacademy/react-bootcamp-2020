import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.component';
import { VideoContext } from '../../providers/Video';

const CardListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CardList({ videos }) {
  // const { videos } = useContext(VideoContext);
  const { setCurrentVideo } = useContext(VideoContext);
  function handleClickOnCard(video) {
    setCurrentVideo(video);
  }

  return (
    <CardListDiv>
      {videos.map((video) => (
        <Card
          key={video.videoId}
          videoId={video.videoId}
          title={video.title}
          description={video.description}
          imageUrl={video.imageUrl}
          onClick={() => handleClickOnCard(video)}
        />
      ))}
    </CardListDiv>
  );
}

export default CardList;
