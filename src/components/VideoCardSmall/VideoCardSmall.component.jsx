import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router';
import {
  CardSmall,
  CardContainerSmall,
  CardImageSmall,
  CardContentSmall,
  TitleSmall,
} from './VideoCardSmall.styles';

export default function VideoCardSmall({ video: { id, channelTitle, image, title } }) {
  const { theme } = useContext(ThemeContext);
  const history = useHistory();
  const openVideoPage = () => {
    history.push(`/watch/${id}`);
  };

  return (
    <CardSmall role="listitem" theme={theme}>
      <CardContainerSmall onClick={openVideoPage}>
        <CardImageSmall  src={image} alt={title} />
        <CardContentSmall>
          <TitleSmall>{title}</TitleSmall>
          <span>{channelTitle}</span>
        </CardContentSmall>
      </CardContainerSmall>
    </CardSmall>
  );
}
