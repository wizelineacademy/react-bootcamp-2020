import React from 'react';

import VideoCardLarge from '../VideoCardLarge/VideoCardLarge.componenet';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import { LargeCardGrid, SmallCardGrid } from './VideoCardGrid.style';

function VideoCardGrid() {
  return (
    <>
      <LargeCardGrid>
        <VideoCardLarge />
        <VideoCardLarge />
        <VideoCardLarge />
      </LargeCardGrid>
      <SmallCardGrid>
        <VideoCardSmall />
        <VideoCardSmall />
        <VideoCardSmall />
        <VideoCardSmall />
        <VideoCardSmall />
        <VideoCardSmall />
        <VideoCardSmall />
        <VideoCardSmall />
      </SmallCardGrid>
    </>
  );
}

export default VideoCardGrid;
