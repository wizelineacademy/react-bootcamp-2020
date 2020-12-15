import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import GlobalContext from '../../state/GlobalContext';

const Entities = require('html-entities').AllHtmlEntities;

function YoutubeListItem(props) {
  const history = useHistory();
  const { setActiveVideo } = useContext(GlobalContext);
  const handleClick = () => {
    setActiveVideo({
      videoId: props.videoId,
      title: props.title,
      description: props.description,
      channelTitle: props.channelTitle,
      imageUrl: props.imageUrl,
    });
    if (history.location.pathname === '/') {
      history.push(`/video/${props.videoId}`);
    } else if (history.location.pathname === '/favorites') {
      history.push(`/favorites/${props.videoId}`);
    }
  };
  const entities = new Entities();

  return (
    <Card
      style={{ width: '20rem', height: '450px' }}
      className="card-click"
      onClick={handleClick}
    >
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{entities.decode(props.title)}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default YoutubeListItem;
