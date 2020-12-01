import React from 'react';
import styled from 'styled-components';
import Row from '../Row/Row.component';

const StyledRowList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
`;

function RowList() {
  const videos = [
    {
      videoId: '33445',
      title: 'video 1',
      description: 'description 1 description 1',
      imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    },
    {
      videoId: '6666',
      title: 'video 2',
      description: 'description 2 description 2',
      imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    },
  ];
  return (
    <StyledRowList>
      {videos.map((video) => (
        <Row videoId={video.videoId} title={video.title} imageUrl={video.imageUrl} />
      ))}
    </StyledRowList>
  );
}

export default RowList;
