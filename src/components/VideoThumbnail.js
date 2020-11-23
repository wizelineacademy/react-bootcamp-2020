import React from 'react';

export const VideoThumbnail = ({ channelName, title, img }) => {
  return (
    <div className="video_thumb">
      <img src={img} alt="videoThubmnail" />
      <p>{title}</p>
      <p>{channelName}</p>
    </div>
  );
};
