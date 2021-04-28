import React from 'react';

import RelatedCards from '../RelatedCard/RelatedCards.component';
import VideoCards from '../VideoCard/VideoCards.component';

const ListVideoCard = ({ relatedCard, onSelectedVideo, videos }) => {
  if (relatedCard) {
    return <RelatedCards videos={videos} onSelectedVideo={onSelectedVideo} />;
  }
  return <VideoCards videos={videos} onSelectedVideo={onSelectedVideo} />;
};

export default ListVideoCard;
