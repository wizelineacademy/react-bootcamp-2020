import React, { Component } from 'react';

import CardWrapper from './CardWrapper.styled';
import CardVideo from './CardVideo.styled';
import CardContent from './CardContent.styled';

class Card extends Component {
  render() {
    return (
      <CardWrapper to={`/video/${this.props.videoId}`}>
        <CardVideo>
          <img src={this.props.cardImg} alt={this.props.title} />
        </CardVideo>
        <CardContent>
          <h2>{this.props.title}</h2>
        </CardContent>
      </CardWrapper>
    );
  }
}

export default Card;
