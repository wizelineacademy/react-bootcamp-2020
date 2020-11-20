import React from 'react';
import Card from '../Card/Card.component';
import './CardList.styles.css';

function CardList() {
  const videos = [
    {
      title: 'video 1',
      description: 'description 1 description 1',
      imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    },
    {
      title: 'video 2',
      description: 'description 2 description 2',
      imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    },
  ];
  return (
    <div className="card-list">
      {videos.map((video) => (
        <Card
          title={video.title}
          description={video.description}
          imageUrl={video.imageUrl}
        />
      ))}
    </div>
  );
}

export default CardList;
