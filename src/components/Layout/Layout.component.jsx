import React, { Component } from 'react';
import Header from '../Header';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
