import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.component';

const CardListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function CardList({ videos, isFavorite }) {
  return (
    <CardListDiv>
      {videos.map(({ videoId, title, description, imageUrl }) => (
        <Card
          key={videoId}
          videoId={videoId}
          title={title}
          description={description}
          imageUrl={imageUrl}
          isFavorite={isFavorite}
        />
      ))}
    </CardListDiv>
  );
}

export default CardList;
