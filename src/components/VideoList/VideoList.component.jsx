import React from 'react';
import VideoListItem from '../VideoListItem';

function VideoList(props) {
  return (
    <div>
      {props.items.map((item) => (
        <VideoListItem
          snippet={item.snippet}
          key={item.id.videoId}
          id={item.id.videoId}
          dataId={props.dataId}
        />
      ))}
    </div>
  );
}
export default VideoList;
