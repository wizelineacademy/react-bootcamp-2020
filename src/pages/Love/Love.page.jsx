import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { MyContext } from '../../contexts/MyContext';
import { useAuth } from '../../providers/Auth';
import LoveStyled from './Love.styles';

function Love() {
  const { authenticated } = useAuth();
  const loveArray = useContext(MyContext);

  return (
    <LoveStyled>
      <Link to="/">Back</Link>
      <h3>❤ Videos</h3>
      {authenticated ? (
        <div>
          {loveArray.map((video) => (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video}`}
              className="player"
            />
          ))}
        </div>
      ) : (
        <p>Please login to see your favorite videos :D</p>
      )}
    </LoveStyled>
  );
}

export default Love;
