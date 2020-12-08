import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  SmallVideoCard,
  SmallMultimediaArea,
  SmallContentArea,
  SmallCardParragraphContent,
} from './VideoCardSmall.style';
import './VideoCardSmall.style.css';

function VideoCardSmall({ searchItem }) {
  const history = useHistory();

  const onVideoSelected = (event) => {
    event.preventDefault();
    history.push('/reproducer');
  };

  return (
    <SmallVideoCard className="videoSmall-wrapper" onClick={onVideoSelected}>
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
        <SmallCardParragraphContent className="title channel">
          {searchItem.snippet.channelTitle}
        </SmallCardParragraphContent>
        <SmallCardParragraphContent className="description">
          {searchItem.snippet.description}
        </SmallCardParragraphContent>
      </SmallContentArea>
    </SmallVideoCard>
  );
}

export default VideoCardSmall;
