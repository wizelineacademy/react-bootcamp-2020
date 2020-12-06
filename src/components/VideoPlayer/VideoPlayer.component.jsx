import React from 'react';

function VideoPlayer(props) {
  return (
    <div>
      <div>
        <iframe
          src={`https://www.youtube.com/watch?v=${props.snippet.id.videoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title={props.snippet.title}
          allowFullScreen
        />
      </div>
      <div>
        <div>
          <a href="{video.snippet.title}" className="header">
            {props.snippet.title}
          </a>
          <div>{props.snippet.description}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
