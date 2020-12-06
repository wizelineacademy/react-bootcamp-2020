/* eslint-disable */
import React from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './VideoItem.styles.css';

const VideoCardList = ({ video, onVideoSelect }) => {
  const handleClick = () => {
    onVideoSelect(video);
  };

  return (
    <Link to={`/player/${video.id.videoId}`}>
      <section onClick={handleClick} className="vi__container">
        <Image
          size="small"
          src={video.snippet.thumbnails.medium.url}
          className="vi__img"
          alt="thumbnail"
        />
        <p className="vi__title">{video.snippet.title}</p>
      </section>
    </Link>
  );
};

export default VideoCardList;
