import React, { Component } from 'react';

import StyledButton from './StyledButton.styled';

class Button extends Component {
  render() {
    return <StyledButton>{this.props.children}</StyledButton>;
  }
}

export default Button;
