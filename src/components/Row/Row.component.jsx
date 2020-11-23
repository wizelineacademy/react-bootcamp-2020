import React from 'react';
import './Row.styles.css';
import { Link } from 'react-router-dom';

function Row({ videoId, title, imageUrl }) {
  return (
    <div className="row">
      <Link className="row-link" to={`/player/${videoId}`}>
        <img className="row-img" src={imageUrl} alt={imageUrl} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default Row;
