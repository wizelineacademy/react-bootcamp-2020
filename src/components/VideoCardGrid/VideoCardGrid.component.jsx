import React from 'react';

import VideoCardLarge from '../VideoCardLarge/VideoCardLarge.componenet';
import { LargeCardGrid } from './VideoCardGrid.style';

function VideoCardGrid() {
  return (
    <LargeCardGrid>
      <VideoCardLarge />
      <VideoCardLarge />
      <VideoCardLarge />
    </LargeCardGrid>
  );
}

export default VideoCardGrid;
