import React from 'react';
import './Video.styles.css';

function Video({ id, title, description }) {
  return (
    <div className="video">
      <iframe
        title="youtube-player"
        id="player"
        type="text/html"
        width="250"
        src={`http://www.youtube.com/embed/${id}?enablejsapi=1`}
        frameBorder="0"
      />
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
}

export default Video;
