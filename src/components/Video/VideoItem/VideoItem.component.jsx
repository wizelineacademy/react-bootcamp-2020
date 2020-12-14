import React from 'react';
import { Item, ItemWrapper, ItemTitle, ItemChannel, Thumbnail } from './VideoItem.styles';

const VideoListItem = ({ video, handleOnChangeVideo }) => {
  const { title, thumbnail, channelTitle, videoId } = video;

  return (
    <Item onClick={() => handleOnChangeVideo(videoId)}>
      <Thumbnail src={thumbnail} alt={title} />
      <ItemWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemChannel>{channelTitle}</ItemChannel>
      </ItemWrapper>
    </Item>
  );
};

export default React.memo(VideoListItem);
