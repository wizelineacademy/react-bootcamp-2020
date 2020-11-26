import React from 'react';

import MainPane from '../MainPane';
import VideoItem from '../VideoItem';
import { VideoListPane } from './VideoList.component.styled';
import { videos } from '../../mockedData';

function VideoList() {
  return (
    <MainPane>
      <VideoListPane>
        {videos.map((video, index) => (
          <VideoItem
            title={video.snippet.title}
            covers={video.snippet.thumbnails.default.url}
            id={index}
            key={video.etag}
          />
        ))}
      </VideoListPane>
    </MainPane>
  );
}

export default VideoList;
