import React from 'react';
import './Video.styles.css';

function Video({ id, title, channelTitle, img, onClick }) {
  return (
    <botton className="video" onClick={onClick} id={id}>
      <img width="250" src={img} alt={title} id={id} />
      <div id={id}>
        <h3 id={id}>{title}</h3>
        <p id={id}>{channelTitle}</p>
      </div>
    </botton>
  );
}

export default Video;
