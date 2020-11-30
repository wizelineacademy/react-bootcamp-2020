import React from 'react';
import Navigation from '../Navigation';

import './Layout.styles.css';
import Header from '../Header';

function Layout({ children }) {
  return (
    <div className="page">
      <Navigation />

      <main className="container">
        <Header />

        {children}
      </main>
    </div>
  );
}

export default Layout;
