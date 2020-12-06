import React from 'react';

import searchResultMocked from '../../utils/searchResultMocked.json';
import './VideoCardLarge.style.css';
import {
  LargeVideoCard,
  LargeMultimediaArea,
  LargeContentArea,
  LargeCardParragraphContent,
} from './VideoCardLarge.style';

function VideoCardLarge() {
  return (
    <LargeVideoCard className="videoLarge-wrapper">
      <LargeMultimediaArea className="multimediaArea">
        <img
          src={searchResultMocked.items[0].snippet.thumbnails.high.url}
          alt={`Thumbnail for "${searchResultMocked.items[3].snippet.title}" video`}
        />
      </LargeMultimediaArea>
      <LargeContentArea className="contentArea">
        <LargeCardParragraphContent className="title">
          {searchResultMocked.items[3].snippet.title}
        </LargeCardParragraphContent>
        <LargeCardParragraphContent className="description">
          {searchResultMocked.items[3].snippet.description}
        </LargeCardParragraphContent>
      </LargeContentArea>
    </LargeVideoCard>
  );
}
export default VideoCardLarge;
