import React from 'react';
import { Link } from 'react-router-dom';

import { Video } from './VideoItem.component.styled';

function VideoItem({ title, covers, id }) {
  return (
    <Video>
      <Link to={`/video/${id}`}>
        <img src={covers} alt={title} />
        <h3>{title}</h3>
      </Link>
    </Video>
  );
}

export default VideoItem;
