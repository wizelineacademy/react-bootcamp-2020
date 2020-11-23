import React from 'react';
import Row from '../Row/Row.component';
import './RowList.styles.css';

function RowList() {
  const videos = [
    {
      videoId: '33445',
      title: 'video 1',
      description: 'description 1 description 1',
      imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    },
    {
      videoId: '6666',
      title: 'video 2',
      description: 'description 2 description 2',
      imageUrl: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    },
  ];
  return (
    <div className="row-list">
      {videos.map((video) => (
        <Row videoId={video.videoId} title={video.title} imageUrl={video.imageUrl} />
      ))}
    </div>
  );
}

export default RowList;
