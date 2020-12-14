import React from 'react';
import './Video.styles.css';

function Video({ id, title, channelTitle, img }) {
  return (
    <div className="video">
      <img width="250" src={img} alt={title} id={id} />
      <div>
        <h3>{title}</h3>
        <p>{channelTitle}</p>
      </div>
    </div>
  );
}

export default Video;
