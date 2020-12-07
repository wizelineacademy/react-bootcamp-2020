import React, { memo } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.component';

const List = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 1.5rem;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  &::-webkit-scrollbar-track {
    background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
  }
`;

const CardList = ({ videos }) => {
  // console.log('videos', videos);
  return (
    <List>
      {videos &&
        videos.map((video) => {
          return <Card key={video.id} data={video} />;
        })}
    </List>
  );
};

export default memo(CardList);
