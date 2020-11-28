import React, { useContext } from 'react';
import { Card, Image } from 'semantic-ui-react';
import moment from 'moment';

import VideosContext from '../../context/VideosContext';

const VideoCardHome = ({ video }) => {
  const { onVideoSelect } = useContext(VideosContext);

  return (
    <Card onClick={() => onVideoSelect(video)} centered fluid>
      <Image src={video.snippet.thumbnails.medium.url} />
      <Card.Content>
        <Card.Header>{video.snippet.title}</Card.Header>
        <Card.Meta>
          <span className="date">{moment(video.snippet.publishTime).fromNow()}</span>
        </Card.Meta>
        <Card.Description>{video.snippet.description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default VideoCardHome;
