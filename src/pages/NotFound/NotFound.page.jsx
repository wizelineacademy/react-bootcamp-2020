import React, { Component } from 'react';

import './NotFound.styles.css';

class NotFoundPage extends Component {
  render() {
    return (
      <section data-testid="notFound">
        <img src="404.gif" alt="page not found" />
      </section>
    );
  }
}

export default NotFoundPage;
