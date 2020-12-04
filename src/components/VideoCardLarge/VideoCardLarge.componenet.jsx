import React from 'react';

import searchResultMocked from '../../utils/searchResultMocked.json';
import './VideoCardLarge.style.css';
import { LargeVideoCard, MultimediaArea, ContentArea } from './VideoCardLarge.style';

function VideoCardLarge() {
  return (
    <LargeVideoCard className="videoLarge-wrapper">
      <MultimediaArea className="multimediaArea">
        <img
          src={searchResultMocked.items[0].snippet.thumbnails.high.url}
          alt={`Thumbnail for "${searchResultMocked.items[3].snippet.title}" video`}
        />
      </MultimediaArea>
      <ContentArea className="contentArea">
        <p className="title">{searchResultMocked.items[3].snippet.title}</p>
        <p className="description">{searchResultMocked.items[3].snippet.description}</p>
      </ContentArea>
    </LargeVideoCard>
  );
}
export default VideoCardLarge;
