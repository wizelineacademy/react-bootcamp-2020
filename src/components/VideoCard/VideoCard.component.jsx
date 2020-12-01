import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.styles.css';

function VideoCard({ data, id }) {
  const renderHTML = (rawHTML) =>
    React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <Link to={`/video/${id}`}>
      <article className="grid-item">
        <div className="img-container">
          <img
            src={data.thumbnails.medium.url}
            alt={data.title}
            className="img-thumbnail"
          />
        </div>
        <div className="title-container">{renderHTML(data.title)}</div>
        <div className="description-container">
          <p>{data.description}</p>
        </div>
      </article>
    </Link>
  );
}

export default VideoCard;
