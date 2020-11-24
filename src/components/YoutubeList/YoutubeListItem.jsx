import React from 'react';
import { Card } from 'react-bootstrap';

function YoutubeListItem(props) {
  return (
    <>
      <Card style={{ width: '20rem', height: '450px' }}>
        <Card.Img variant="top" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default YoutubeListItem;
