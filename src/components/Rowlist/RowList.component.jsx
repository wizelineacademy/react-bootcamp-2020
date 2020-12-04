import React from 'react';

import styled from 'styled-components';
import Row from '../Row/Row.component';

const StyledRowList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

function RowList({ videos, isFavorit }) {
  function handleClickOnRow() {}
  return (
    <StyledRowList>
      {videos.map((video) => (
        <Row
          key={video.videoId}
          videoId={video.videoId}
          title={video.title}
          imageUrl={video.imageUrl}
          onClick={() => handleClickOnRow(video)}
          isFavorit={isFavorit}
        />
      ))}
    </StyledRowList>
  );
}

export default RowList;
