import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router';
import {
  Card,
  CardContainer,
  CardImage,
  CardContent,
  Title,
  Description,
} from './styles/VideoCard.styles';
import {
  CardSmall,
  CardContainerSmall,
  CardImageSmall,
  CardContentSmall,
  TitleSmall,
} from './styles/VideoCardSmall.styles';

import { VIDEO_CARD_DEFAULT_SIZE } from '../../utils/constants';

export default function VideoCard({
  video: { snippet },
  video: {
    id: { videoId: id },
  },
  size = VIDEO_CARD_DEFAULT_SIZE,
}) {
  const { theme } = useContext(ThemeContext);
  const history = useHistory();

  const openVideoPage = () => {
    history.push(`/watch/${id}`);
  };

  return size === VIDEO_CARD_DEFAULT_SIZE ? (
    <Card theme={theme}>
      <CardContainer onClick={openVideoPage}>
        <CardImage src={snippet.thumbnails.default.url} alt={snippet.title} />
        <CardContent>
          <Title>{snippet.title}</Title>
          <Description>{snippet.description}</Description>
        </CardContent>
      </CardContainer>
    </Card>
  ) : (
    <CardSmall theme={theme}>
      <CardContainerSmall onClick={openVideoPage}>
        <CardImageSmall src={snippet.thumbnails.default.url} alt={snippet.title} />
        <CardContentSmall>
          <TitleSmall>{snippet.title}</TitleSmall>
          <span>{snippet.channelTitle}</span>
        </CardContentSmall>
      </CardContainerSmall>
    </CardSmall>
  );
}
