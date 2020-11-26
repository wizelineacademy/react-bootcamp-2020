/* eslint-disable */
import React from 'react';
import { Image } from 'semantic-ui-react';

import './VideoItem.styles.css';

const VideoItem = ({ video, onVideoSelect }) => {
  if (!video) return <div>L oading...</div>;

  const handlClick = () => {
    onVideoSelect(video);
  };

  return (
    <section onClick={handlClick} className="vi__container">
      <Image
        size="small"
        src={video.snippet.thumbnails.high.url}
        className="vi__img"
        alt="thumbnail"
      />
      <p className="vi__title">{video.snippet.title}</p>
    </section>
  );
};

export default VideoItem;
