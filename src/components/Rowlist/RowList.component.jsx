import React, { useContext } from 'react';

import styled from 'styled-components';
import Row from '../Row/Row.component';
import { VideoContext } from '../../providers/Video';

const StyledRowList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
`;

function RowList() {
  const { videos } = useContext(VideoContext);
  const { setCurrentVideo } = useContext(VideoContext);

  function handleClickOnRow(video) {
    setCurrentVideo(video);
  }
  return (
    <StyledRowList>
      {videos.map((video) => (
        <Row
          videoId={video.videoId}
          title={video.title}
          imageUrl={video.imageUrl}
          onClick={() => handleClickOnRow(video)}
        />
      ))}
    </StyledRowList>
  );
}

export default RowList;
