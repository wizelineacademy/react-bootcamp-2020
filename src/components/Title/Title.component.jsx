import React, { Component } from 'react';

import StyledTitle from './StyledTitle.styled';

class Title extends Component {
  render() {
    return <StyledTitle>{this.props.children}</StyledTitle>;
  }
}

export default Title;
