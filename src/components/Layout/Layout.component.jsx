import React, { useContext } from 'react';

import Container from 'react-bootstrap/Container';

import { ThemeContext } from '../../state/ThemeContext';
import Navigation from '../Navigation/Navigation.component';

export default function Layout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container fluid className={theme} style={{ transition: '0.25s' }}>
      <header>
        <Navigation />
      </header>
      <main className="main" role="main">
        {children}
      </main>
    </Container>
  );
}
