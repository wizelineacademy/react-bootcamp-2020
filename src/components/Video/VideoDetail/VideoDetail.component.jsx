import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  VideoContainer,
  Frame,
  VideoWrapper,
  VideoTitle,
  VideoChannel,
  Divider,
  VideoDescription,
  IconSave,
  IconDelete,
  IconContainer,
} from './VideoDetail.styles';

function VideoDetail({ selectedVideo, handlePlayList }) {
  const history = useHistory();
  const currentPath = history.location.pathname;
  const currentVideoId = currentPath.includes('video')
    ? history.location.pathname.replace('/video/', '')
    : history.location.pathname.replace('/favorites/', '');
  const currentUrl = `https://youtube.com/embed/${currentVideoId}`;
  return (
    <VideoContainer>
      <VideoWrapper>
        <Frame src={currentUrl} title={selectedVideo?.title || 'Loading'} />
        <IconContainer onClick={() => handlePlayList(selectedVideo.videoId)}>
          {selectedVideo?.isFavorite ? <IconDelete /> : <IconSave />}
        </IconContainer>
        <VideoTitle>{selectedVideo?.title || 'Loading'}</VideoTitle>
        <VideoChannel>{selectedVideo?.channelTitle || 'Loading'}</VideoChannel>
        <Divider />
        <VideoDescription>
          {selectedVideo?.description ||
            (selectedVideo?.description === '' ? '' : 'Loading')}
        </VideoDescription>
      </VideoWrapper>
    </VideoContainer>
  );
}

export default React.memo(VideoDetail);
