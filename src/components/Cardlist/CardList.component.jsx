import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.component';

const CardListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CardList({ videos, isFavorite }) {
  function handleClickOnCard() {}

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
          isFavorite={isFavorite}
        />
      ))}
    </CardListDiv>
  );
}

export default CardList;
