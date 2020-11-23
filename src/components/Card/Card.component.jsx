import React from 'react';
import './Card.styles.css';
import { Link } from 'react-router-dom';

function Card({ videoId, title, description, imageUrl }) {
  return (
    <div className="card">
      <Link to={`/player/${videoId}`}>
        <img src={imageUrl} alt={imageUrl} />
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default Card;
