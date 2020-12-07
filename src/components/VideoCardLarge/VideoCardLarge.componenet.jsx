import React from 'react';

import './VideoCardLarge.style.css';
import {
  LargeVideoCard,
  LargeMultimediaArea,
  LargeContentArea,
  LargeCardParragraphContent,
} from './VideoCardLarge.style';

function VideoCardLarge({ searchItem }) {
  return (
    <LargeVideoCard className="videoLarge-wrapper">
      <LargeMultimediaArea className="multimediaArea">
        <img
          src={searchItem.snippet.thumbnails.high.url}
          alt={`Thumbnail for "${searchItem.snippet.title}" video`}
        />
      </LargeMultimediaArea>
      <LargeContentArea className="contentArea">
        <LargeCardParragraphContent className="title">
          {searchItem.snippet.title}
        </LargeCardParragraphContent>
        <LargeCardParragraphContent className="title channel">
          {searchItem.snippet.channelTitle}
        </LargeCardParragraphContent>
        <LargeCardParragraphContent className="description">
          {searchItem.snippet.description}
        </LargeCardParragraphContent>
      </LargeContentArea>
    </LargeVideoCard>
  );
}
export default VideoCardLarge;
