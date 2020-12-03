import React from 'react';

import Container from 'react-bootstrap/Container';

import Navigation from '../Navigation/Navigation.component';

export default function Layout({ children }) {
  return (
    <Container fluid>
      <header>
        <Navigation />
      </header>
      <main className="main" role="main">
        {children}
      </main>
    </Container>
  );
}
