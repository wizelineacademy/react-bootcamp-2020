import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import LoveStyled from './Love.styles';

function Love() {
  const { authenticated } = useAuth();

  return (
    <LoveStyled>
      <Link to="/">Back</Link>
      <h3>Shows Loved</h3>

      {authenticated ? (
        <div>
          <ul>
            <li>show 1</li>
          </ul>
        </div>
      ) : (
        <p>Please Login to see your favorite videos</p>
      )}
    </LoveStyled>
  );
}

export default Love;
