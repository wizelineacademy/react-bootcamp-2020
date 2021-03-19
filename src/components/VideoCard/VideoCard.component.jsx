import React from "react";

import "./VideoCard.styles.css";

const VideoCard = ({ title, description, thumbnail }) => {
  return (
    <div className="video-card">
        <img src={thumbnail} alt={title} className="video-card-img" />
        <div className="video-card-content">
            <h6 className="video-card-heading">{title}</h6>
            <p className="video-card-paragraph">{description}</p>
        </div>
    </div>
  );
};

export default VideoCard;