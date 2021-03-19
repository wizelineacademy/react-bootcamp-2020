import React from 'react';
import parse from 'html-react-parser';

import "./ContainerCard.styles.css";

import VideoCard from './../VideoCard/index';

let data = require('../../utils/mock/youtube-videos-mock.json');

const ContainerCard = () => {
    return (<div className="container-card-list">
        {data.items.map((video) => (
        <VideoCard
            key={video.etag}
            title={parse(video.snippet.title)}
            description={parse(video.snippet.description)}
            thumbnail={video.snippet.thumbnails.high.url}
        ></VideoCard>
        ))}
  </div>);
}

export default ContainerCard;

