import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLink } from './NotFound.styles';

function NotFoundPage() {
  return (
    <HomeLink>
      <Link to="/" className="home-link">
        ← home
      </Link>
      <img src="404.gif" alt="page not found" />
    </HomeLink>
  );
}

export default NotFoundPage;
