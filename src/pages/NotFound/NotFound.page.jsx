import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section className="not-found">
      <Link to="/" className="home-link">
        home
      </Link>
      <img src="404.gif" alt="page not found" />
    </section>
  );
}

export default NotFoundPage;
