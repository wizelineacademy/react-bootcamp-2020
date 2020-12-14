import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { MyContext } from '../../contexts/MyContext';
import { useAuth } from '../../providers/Auth';
import LoveStyled from './Love.styles';

function Love() {
  const { authenticated } = useAuth();
  const loveArray = useContext(MyContext)

  return (
    <LoveStyled>
      <Link to="/">Back</Link>
      <h3>Shows Loved</h3>
      {authenticated ? (
        <div>
         {loveArray.map(video =>(
            <ReactPlayer url={`https://www.youtube.com/watch?v=${video}`} />
         ))}
        </div>
      ) : (
        <p>Please Login to see your favorite videos</p>
      )}
    </LoveStyled>
  );
}

export default Love;
