import React, { useContext } from 'react';
import Card from '../Card/Card.component';
import { VideoContext } from '../../providers/Video';

import './CardList.styles.css';

function CardList() {
  const { videos } = useContext(VideoContext);
  return (
    <div className="card-list">
      {videos.map((video) => (
        <Card
          videoId={video.videoId}
          title={video.title}
          description={video.description}
          imageUrl={video.imageUrl}
        />
      ))}
    </div>
  );
}

export default CardList;
