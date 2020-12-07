import React from 'react';

import {
  SmallVideoCard,
  SmallMultimediaArea,
  SmallContentArea,
  SmallCardParragraphContent,
} from './VideoCardSmall.style';
import './VideoCardSmall.style.css';

function VideoCardSmall({ searchItem }) {
  return (
    <SmallVideoCard className="videoSmall-wrapper">
      <SmallMultimediaArea className="multimediaArea">
        <img
          src={searchItem.snippet.thumbnails.medium.url}
          alt={`Thumbnail for "${searchItem.snippet.title}" video`}
        />
      </SmallMultimediaArea>
      <SmallContentArea className="contentArea">
        <SmallCardParragraphContent className="title">
          {searchItem.snippet.title}
        </SmallCardParragraphContent>
        <SmallCardParragraphContent className="description">
          {searchItem.snippet.description}
        </SmallCardParragraphContent>
      </SmallContentArea>
    </SmallVideoCard>
  );
}

export default VideoCardSmall;
