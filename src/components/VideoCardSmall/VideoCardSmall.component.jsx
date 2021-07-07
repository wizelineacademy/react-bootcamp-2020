import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardSmall,
  CardContainerSmall,
  CardImageSmall,
  CardContentSmall,
  TitleSmall,
} from './VideoCardSmall.styles';

export default function VideoCardSmall({ video: { id, channelTitle, image, title } }) {
  

  return (
    <Link to={`/watch/${id}`}>

    <CardSmall  role="listitem">
      <CardContainerSmall >
        <CardImageSmall  src={image} alt={title} />
        <CardContentSmall>
          <TitleSmall>{title}</TitleSmall>
          <span>{channelTitle}</span>
        </CardContentSmall>
      </CardContainerSmall>
    </CardSmall>
    </Link>

  );
}
