import React, { Component } from 'react';

import { ContainerDiv } from './ContainerDiv.styled';

class Container extends Component {
  render() {
    return <ContainerDiv>{this.props.children}</ContainerDiv>;
  }
}

export default Container;
