import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardContainer,
  CardImage,
  CardContent,
  Title,
  Description,
} from './VideoCard.styles';

export default function VideoCard({ video: { id, description, image, title } }) {


  return (
    <Link  to={`/watch/${id}`}>
    <Card role="listitem">
      <CardContainer >
        <CardImage  src={image} alt={title} />
        <CardContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </CardContent>
      </CardContainer>
    </Card>
    </Link>
  );
}
