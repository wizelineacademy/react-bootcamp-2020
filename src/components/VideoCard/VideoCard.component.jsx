import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ data, id }) {
  const renderHTML = (rawHTML) =>
    React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } });

  return (
    <article className="grid-item">
      <Link to={`/video/${id}`}>
        <div className="img-container">
          <img
            src={data.thumbnails.medium.url}
            alt={data.title}
            className="img-thumbnail"
          />
        </div>
        <div className="title-container">{renderHTML(data.title)}</div>
        <div className="description-container">{data.description}</div>
      </Link>
    </article>
  );
}

export default VideoCard;
