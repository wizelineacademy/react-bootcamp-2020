/* eslint-disable */
import React from 'react';
import { Image } from 'semantic-ui-react';

import './VideoItem.styles.css';

const VideoCardList = ({ video, onVideoSelect }) => {
  const handlClick = () => {
    onVideoSelect(video);
  };

  return (
    <section onClick={handlClick} className="vi__container">
      <Image
        size="small"
        src={video.snippet.thumbnails.medium.url}
        className="vi__img"
        alt="thumbnail"
      />
      <p className="vi__title">{video.snippet.title}</p>
    </section>
  );
};

export default VideoCardList;
