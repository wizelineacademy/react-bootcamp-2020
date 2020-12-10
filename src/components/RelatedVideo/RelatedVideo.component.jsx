import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
  RelatedVideoWrapper,
  ImageThumbnail,
  VideoInformation,
} from './RelatedVideo.style';
import './RelatedVideo.style.css';

import VideoSelectedContext from '../../state/VideoSelectedContext';

function RelatedVideo({ video }) {
  const history = useHistory();
  const { setVideoIdFn } = useContext(VideoSelectedContext);

  const onVideoSelected = () => {
    // event.preventDefault();
    history.push(`/reproducer?id=${video.id.videoId}`);
    setVideoIdFn(video.id.videoId);
  };

  return (
    <RelatedVideoWrapper className="relatedVideos" onClick={onVideoSelected}>
      <ImageThumbnail alt="Video thubmnail" src={video.snippet.thumbnails.medium.url} />
      <VideoInformation>
        <p className="title">{video.snippet.title} </p>
        <p className="channel">{video.snippet.channelTitle}</p>
        <p className="publishedDate">{video.snippet.publishedAt}</p>
        <p className="description">{video.snippet.description}</p>
      </VideoInformation>
    </RelatedVideoWrapper>
  );
}

export default RelatedVideo;
