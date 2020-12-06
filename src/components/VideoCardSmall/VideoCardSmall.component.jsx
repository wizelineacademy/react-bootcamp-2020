import React from 'react';

import searchResultMocked from '../../utils/searchResultMocked.json';
import {
  SmallVideoCard,
  SmallMultimediaArea,
  SmallContentArea,
  SmallCardParragraphContent,
} from './VideoCardSmall.style';
import './VideoCardSmall.style.css';

function VideoCardSmall() {
  return (
    <SmallVideoCard className="videoSmall-wrapper">
      <SmallMultimediaArea className="multimediaArea">
        <img
          src={searchResultMocked.items[2].snippet.thumbnails.medium.url}
          alt={`Thumbnail for "${searchResultMocked.items[2].snippet.title}" video`}
        />
      </SmallMultimediaArea>
      <SmallContentArea className="contentArea">
        <SmallCardParragraphContent className="title">
          {searchResultMocked.items[2].snippet.title}
        </SmallCardParragraphContent>
        <SmallCardParragraphContent className="description">
          {searchResultMocked.items[1].snippet.description}
        </SmallCardParragraphContent>
      </SmallContentArea>
    </SmallVideoCard>
  );
}

export default VideoCardSmall;
