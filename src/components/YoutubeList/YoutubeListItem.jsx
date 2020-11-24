import React from 'react';

function YoutubeListItem(props) {
  return (
    <>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </>
  );
}

export default YoutubeListItem;
