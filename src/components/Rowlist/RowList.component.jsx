import React, { useContext } from 'react';

import styled from 'styled-components';
import Row from '../Row/Row.component';
import { VideoContext } from '../../providers/Video';

const StyledRowList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

function RowList({ videos, isFavorit }) {
  const { setCurrentVideo } = useContext(VideoContext);

  function handleClickOnRow(video) {
    setCurrentVideo(video);
  }
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
