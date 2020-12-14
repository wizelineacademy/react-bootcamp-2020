import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player/youtube';
import './VideoDetail.styles.css';

function VideoDetail({ match }) {
  const [love, setLove] = useState(false);

  console.log(match);

  function loveVideo() {
    setLove(!love);
  }

  return (
    <div className="body">
        <Link to="/">Back</Link>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${match.params.videoId}`}
        loop="true"
        playing="true"
      />
      {love ? (
        <button className="loved" onClick={loveVideo}>
          loved
        </button>
      ) : (
        <button className="love" onClick={loveVideo}>
          love
        </button>
      )}
    </div>
  );
}

export default VideoDetail;
