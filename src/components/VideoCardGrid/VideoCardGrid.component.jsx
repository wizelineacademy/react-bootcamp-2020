import React from 'react';

import VideoCardLarge from '../VideoCardLarge/VideoCardLarge.componenet';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import { LargeCardGrid, SmallCardGrid } from './VideoCardGrid.style';

function VideoCardGrid() {
  return (
    <div>
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
    </div>
  );
}

export default VideoCardGrid;
