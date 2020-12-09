import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './VideoCardLarge.style.css';
import {
  LargeVideoCard,
  LargeMultimediaArea,
  LargeContentArea,
  LargeCardParragraphContent,
} from './VideoCardLarge.style';

import VideoSelectedContext from '../../state/VideoSelectedContext';

function VideoCardLarge({ searchItem }) {
  const history = useHistory();
  const { setVideoFn } = useContext(VideoSelectedContext);

  const onVideoSelected = (event) => {
    event.preventDefault();
    history.push(`/reproducer?id=${searchItem.id.videoId}`);
    setVideoFn(searchItem);
  };

  return (
    <LargeVideoCard className="videoLarge-wrapper" onClick={onVideoSelected}>
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
