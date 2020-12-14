import React from 'react';
import { Link } from 'react-router-dom';

import { Video } from './VideoItem.component.styled';

function VideoItem(props) {
  return (
    <Video>
      <Link to={`/video/${props.id}`} onClick={props.onVideoClick}>
        <img src={props.covers} alt={props.title} />
        <h3>{props.title}</h3>
      </Link>
    </Video>
  );
}

export default VideoItem;
