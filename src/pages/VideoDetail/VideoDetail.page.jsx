import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import './VideoDetail.styles.css';
import { useAuth } from '../../providers/Auth';
import { MyContext } from '../../contexts/MyContext';

function VideoDetail({ match }) {
  const [love, setLove] = useState(false);
  const loveArray = useContext(MyContext)
  const { authenticated } = useAuth();

  console.log(match);

  function loveVideo() {
    loveArray.push(match.params.videoId)
    setLove(!love);
  }

  return (
    <div className="body">
        <Link to="/">← Back</Link>
        <Link to="/love">❤️ Videos</Link> <br />
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${match.params.videoId}`}
        loop="true"
        playing="true"
      />

      {authenticated ? (
        <button className={!love ? 'love' : 'loved'} onClick={loveVideo}>
          LOVE
        </button>
      
      ) : (<p>Login to love videos</p>)}
      
      
    </div>
  );
}

export default VideoDetail;
