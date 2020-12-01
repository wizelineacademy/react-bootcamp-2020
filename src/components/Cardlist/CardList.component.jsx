import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.component';
import { VideoContext } from '../../providers/Video';

const CardListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function CardList() {
  const { videos } = useContext(VideoContext);
  return (
    <CardListDiv className="card-list">
      {videos.map((video) => (
        <Card
          videoId={video.videoId}
          title={video.title}
          description={video.description}
          imageUrl={video.imageUrl}
        />
      ))}
    </CardListDiv>
  );
}

export default CardList;
